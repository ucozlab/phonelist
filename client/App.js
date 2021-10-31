import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import MenuIcon from "@material-ui/icons/Menu";
import {Button, Typography, Toolbar, AppBar, IconButton} from "@material-ui/core";

import store from './store';
import Theme from './Theme';

const HelloWorld = () => {
  return (
    <Provider store={store}>
      <Theme>
        <div className="app">
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
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
        </div>
      </Theme>
    </Provider>
  );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
