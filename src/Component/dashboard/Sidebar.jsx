import React from 'react';
import clsx from 'clsx';
import {
  IconButton, Drawer, List, Divider,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from './listItems';


export default function SideBar({ classes, handleDrawerClose, open }) {
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
      <List>{mainListItems(handleDrawerClose)}</List>
    </Drawer>
  );
}
