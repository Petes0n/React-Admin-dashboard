import React, { useState } from "react";
import { AppBar, Drawer, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import { routes } from "../../data";
import "./navbar.scss";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateToPage = (page) => {
    window.location.assign(page);
  };

  const sidebar = () => (
    <Drawer
      open={menuOpen}
      onClose={() => setMenuOpen(false)}
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 200,
          boxSizing: "border-box",
          marginTop: "70px",
        },
      }}
    >
      <KeyboardArrowLeftIcon
        onClick={() => setMenuOpen(false)}
        sx={{
          cursor: "pointer",
          fontSize: "40px",
          marginLeft: 19,
        }}
      />
      <Divider />
      <List>
        {routes.map((route) => {
          return (
            <ListItem
              button
              onClick={() => {
                navigateToPage(route.link);
              }}
              key={route.id}
            >
              <Link to={route.link} />
              <ListItemIcon sx={{ padding: "5px" }}>
                {route.icon}
                <ListItemText sx={{color:"black",marginLeft:'5px'}}>{route.pathName}</ListItemText>
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );

  const header = () => (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "#2a3447" }}>
        <Toolbar>
          <IconButton
            onClick={() => setMenuOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div className="navbar">
            <div className="logo">
              <img src="logo.svg" alt="hello" />
              <span>Admin</span>
            </div>
            <div className="icons">
              <img src="/search.svg" alt="" className="icon" />
              <img src="/app.svg" alt="" className="icon" />
              <img src="expand.svg" alt="" className="icon" />
              <div className="notification">
                <img src="/notifications.svg" alt="" />
                <span>3</span>
              </div>
              <div className="user">
                <img src="/demo.jpeg" alt="" />
                <span>Heather</span>
              </div>
              <div></div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );

  return (
    <div>
      {sidebar()}
      {header()}
      <div>{props.children}</div>
    </div>
  );
}

export default Navbar;
