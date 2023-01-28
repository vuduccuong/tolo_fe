import { Fragment } from "react";
import "./App.css";
import { CssBaseline, Container, Box } from "@mui/material";
import { setAuthToken } from "./helpers/auth";
import CustomRoutes from "./helpers/router";
import NavBar from "./components/nav/app-bar";

const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Container>
        <NavBar />
        <Box sx={{ mt: "65px" }}>
          <CustomRoutes />
        </Box>
      </Container>
    </Fragment>
  );
}

export default App;
