import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import Moment from "react-moment";

const PostItem = ({ post }) => {
  const { author } = post;
  const { userprofile } = author;
  return (
    <Grid item xs={6}>
      <Paper sx={{ textAlign: "start", p: 2 }}>
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={userprofile.avatar}
            alt={author.username}
            sx={{ width: 56, height: 56 }}
          />
          <Grid item sx={{ marginLeft: 2 }}>
            <Typography variant="h5" component="h5">
              {`${userprofile.first_name} ${userprofile.middle_name} ${userprofile.last_name}`}
            </Typography>
            <Typography variant="caption" sx={{ color: "#333" }}>
              <Moment format="dd MM">{post.created_date}</Moment> (
              <Moment toNow>{post.created_date}</Moment>)
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h3" component="h3" sx={{ fontWeight: "bold" }}>
            {post.title}
          </Typography>
          <Typography>{post.description}</Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default PostItem;
