import { Button, ButtonGroup } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { clientAPI } from "../../helpers/client-api";

const PostList = React.lazy(() => import("./post-list"));

const PostPage = () => {
  const [offset, setOffset] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");

  const onNextHandle = (e) => {
    e.preventDefault();
    setOffset((currentOffset) => (currentOffset += 10));
  };

  const onPreviousHandle = (e) => {
    e.preventDefault();
    setOffset((currentOffset) => (currentOffset -= 10));
  };

  useEffect(() => {
    setLoading(true);
    clientAPI
      .get(`/api/v1/posts?offset=${offset}&limit=10`)
      .then(({ data }) => {
        const { count, next, previous, results } = data;
        setPosts(results);
        setPrevious(previous);
        setNext(next);
        setLoading(false);
      });
  }, [offset]);
  return loading ? (
    <em>Loading...</em>
  ) : (
    <Fragment>
      <PostList posts={posts} />
      <ButtonGroup variant="outlined" sx={{ marginTop: 2 }}>
        {previous ? <Button onClick={onPreviousHandle}>Previous</Button> : null}
        {next ? <Button onClick={onNextHandle}>Next</Button> : null}
      </ButtonGroup>
    </Fragment>
  );
};

export default PostPage;
