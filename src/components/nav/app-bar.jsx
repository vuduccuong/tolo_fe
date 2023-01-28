import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar component="nav" sx={{ minHeight: "65px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 4 }}>
        <Typography variant="h4" component="div">
          Tồ Lô App
        </Typography>
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
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
