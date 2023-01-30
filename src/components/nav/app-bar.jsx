import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, redirect } from "react-router-dom";
import { hasAuth, logOut } from "../../helpers/auth";

const NavBar = () => {
  const onLogoutHandle = (e) => {
    e.preventDefault();
    logOut();
    window.location.href = "/";
  };
  return (
    <AppBar component="nav" sx={{ minHeight: "65px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 4 }}>
        <Typography variant="h4" component="div">
          Tồ Lô App
        </Typography>
        {hasAuth() && (
          <>
            <Box>
              <Button>
                <Link to={"/"} style={{ color: "#fff" }}>
                  Accounts
                </Link>
              </Button>
              <Button>
                <Link to={"/posts"} style={{ color: "#fff" }}>
                  Posts
                </Link>
              </Button>
            </Box>
            <Box>
              <Button
                sx={{
                  color: "#fff",
                }}
                onClick={onLogoutHandle}
              >
                Logout
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
