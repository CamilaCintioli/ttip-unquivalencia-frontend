import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  IconButton, AppBar, Toolbar, Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './Menu';

export default function Nav({
  classes, handleDrawerOpen, open, clouseSession,
}) {
  return (
    <div>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                UNQuivalencias
          </Typography>
          <Menu logout={clouseSession} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  clouseSession: PropTypes.func.isRequired,

};
