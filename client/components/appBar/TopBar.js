import React from 'react';
import ReactDOM from 'react-dom';

import MenuIcon from "@material-ui/icons/Menu";
import {Button, Typography, Toolbar, AppBar, IconButton} from "@material-ui/core";

const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar
