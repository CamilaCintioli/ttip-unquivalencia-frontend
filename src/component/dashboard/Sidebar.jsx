import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  IconButton, Drawer, List, Divider,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useSelector } from 'react-redux';
import { mainListItems } from './listItems';
import { userRole } from '../../redux/selectors';


export default function SideBar({ classes, handleDrawerClose, open }) {
  const user = useSelector((state) => userRole(state));

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems(handleDrawerClose, user)}</List>
    </Drawer>
  );
}


SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,

};
