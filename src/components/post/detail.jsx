import {
  Avatar,
  Container,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { width } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import Moment from "react-moment";
import { useLocation } from "react-router-dom";
import { clientAPI } from "../../helpers/client-api";

const PostDetailPage = () => {
  const location = useLocation();
  const pk = location.state?.id || location.pathname.split("/").pop();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    clientAPI.get(`/api/v1/posts/${pk}`).then(({ data }) => {
      setPost(data);
      setLoading(false);
    });
  }, []);

  return loading ? null : (
    <Container>
      <Paper sx={{ p: 2 }}>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            src={post.author?.userprofile.avatar}
            alt={post.author?.userprofile.first_name}
            sx={{ width: 56, height: 56 }}
          />
          <Grid sx={{ pl: 2, textAlign: "start" }}>
            <Typography variant="h5">
              {`${post.author?.userprofile.first_name} ${post.author?.userprofile.middle_name} ${post.author?.userprofile.last_name}`}
            </Typography>
            <Tooltip title="Hehe">
              <Typography
                variant="caption"
                component={"div"}
                sx={{ color: "#333" }}
              >
                Posted on{" "}
                <Moment element="span" locale="vi" format="ll">
                  {post.created_date}
                </Moment>
                -Updated on{" "}
                <Moment element="span" locale="vi" format="ll">
                  {post.modified_date}
                </Moment>
              </Typography>
            </Tooltip>
          </Grid>
        </Grid>
        <Typography variant="h1" component={"h1"} sx={{ textAlign: "start" }}>
          {post.title}
        </Typography>
        <hr />
        <img src="/images/image.jpg" style={{ width: "100%" }} />
        <Typography variant="body1" sx={{ textAlign: "start" }}>
          {post.content}
        </Typography>
      </Paper>
    </Container>
  );
};

export default PostDetailPage;
