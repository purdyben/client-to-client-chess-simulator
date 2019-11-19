import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "inherit",
    ariaLabel: "menu",
    
  },
  bar: {
      background: "rgba(50,52,50)",

  },
}));

export default function CHeader() {
  const classes = useStyles();
        return (
            <div className={classes.root}>
              <AppBar className={classes.bar}>
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} href ="/mainScreen">
                    <img src="logo.png" alt="Logo" height={30} />
                    </IconButton>
                  <Typography variant="h6" color="inherit">
                    Pirate Chess
                  </Typography>
                </Toolbar>
              </AppBar>
            </div>
          );
}