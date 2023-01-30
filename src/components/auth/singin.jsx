import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { hasAuth, setAuthToken } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { clientAPI } from "../../helpers/client-api";

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (hasAuth()) {
      return navigate("/");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    clientAPI
      .post("/auth/login", data)
      .then(({ data }) => {
        const { access_token, token_type } = data;
        localStorage.setItem("access_token", access_token);
        setAuthToken(access_token, token_type);
        window.location.href = "/";
      })
      .catch(({ message }) => {
        alert(message);
      });
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="UserName"
            name="username"
            autoComplete="text"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
