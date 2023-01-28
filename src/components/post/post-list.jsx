import { Grid } from "@mui/material";
import PostItem from "./post-item";

const PostList = ({ posts = [] }) => {
  return (
    <Grid container spacing={2}>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </Grid>
  );
};

export default PostList;
