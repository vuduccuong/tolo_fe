import { Grid } from "@mui/material";
import PostItem from "./post-item";

const PostList = ({ posts = [] }) => {
  return (
    <Grid container spacing={2}>
      {posts.map((post, i) => {
        return <PostItem key={i} post={post} />;
      })}
    </Grid>
  );
};

export default PostList;
