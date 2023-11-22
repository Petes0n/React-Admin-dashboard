import React, { useState } from "react";
import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { routes } from "../../data";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar(props) {
  // State for managing the open/closed state of the sidebar menu
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateToPage = (page) => {
    window.location.assign(page);
  };

  const sidebar = () => (
    <Box sx={{ boxShadow: 3 }}>
      <Drawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        sx={{
          flexShrink: 3,
          "& .MuiDrawer-paper": {
            width: 200,
            boxSizing: "border-box",
            borderRadius: "7px",
            backgroundColor: "#222b3c",
          },
        }}
      >
        <KeyboardArrowLeftIcon
          onClick={() => setMenuOpen(false)}
          sx={{
            cursor: "pointer",
            fontSize: "40px",
            marginLeft: 19,
            marginTop: "3px",
            color:'white'
          }}
        />
        <br />
        <Divider />
        {/* List of navigation items in the sidebar */}
        <List>
          {routes.map((route) => {
            return (
              <ListItem
                button
                onClick={() => {
                  navigateToPage(route.url);
                }}
                key={route.id}
              >
                <ListItemIcon sx={{ padding: "5px", color: "gold" }}>
                  {route.icon}
                  <ListItemText sx={{ color: "white", marginLeft: "6px" }}>
                    {route.pathName}
                  </ListItemText>
                </ListItemIcon>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );

  // Header component
  const header = () => (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "#2a3447" }}>
        <Toolbar>
          {/* Icon button to open the sidebar */}
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
              <img src="/logo192.png" alt="hello" className="admin-logo"/>
              <span>Admin</span>
            </div>
            <div className="icons">
              <img src="/search.svg" alt="" className="icon" />
              <img src="/app.svg" alt="" className="icon" />
              <img src="expand.svg" alt="" className="icon" />
              <Link to="/messages">
                <div className="notification">
                  <img src="/notifications.svg" alt="" />
                  <span>3</span>
                </div>
              </Link>
              <div className="user">
                <Link to='/single/user/info'>
                <img src="/demo.jpeg" alt="" />
                </Link>
                <span>Heather</span>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
const navigateState =()=>{
  if(window.location.pathname !== '/login'){
    return(
      <div>
      {sidebar()}
      {header()}
      {/* Render children components */}
      <div>{props.children}</div>
    </div>
    )
   
  }
  else{
    <div>{props.children}</div>
  }
 

}
  return (
    // Render the complete component
    <>
   { navigateState()}
    </>
  )
}

export default Navbar;
