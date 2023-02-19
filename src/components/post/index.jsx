import { Button, ButtonGroup } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { clientAPI } from "../../helpers/client-api";

const PostList = React.lazy(() => import("./post-list"));
const SearchPost = React.lazy(() => import("./search"));

const PostPage = () => {
  const [offset, setOffset] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const onNextHandle = (e) => {
    e.preventDefault();
    setOffset((currentOffset) => (currentOffset += 1));
  };

  const onPreviousHandle = (e) => {
    e.preventDefault();
    setOffset((currentOffset) => (currentOffset -= 1));
  };

  const onSearch = (v) => {
    setSearchInput(v);
  };

  useEffect(() => {
    setLoading(true);
    clientAPI
      .get(`/api/v1/posts?page=${offset}&page_size=8&q=${searchInput}`)
      .then(({ data }) => {
        const { total, items, page, page_size } = data;
        setPosts(items);
        setPrevious(0);
        setNext(0);
        if (total > (page + 1) * page_size) {
          setNext(1);
        }
        if (page > 0) {
          setPrevious(1);
        }
        setLoading(false);
      });
  }, [offset, searchInput]);
  return (
    <Fragment>
      <SearchPost onSearch={onSearch} />
      {loading ? (
        <em>Loading...</em>
      ) : posts.length === 0 ? (
        <h1>Không có bài đăng nào</h1>
      ) : (
        <Fragment>
          <PostList posts={posts} />

          <ButtonGroup variant="outlined" sx={{ marginTop: 2 }}>
            {previous ? (
              <Button onClick={onPreviousHandle}>Previous</Button>
            ) : null}
            {next ? <Button onClick={onNextHandle}>Next</Button> : null}
          </ButtonGroup>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PostPage;
