import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArchiveIcon from '@material-ui/icons/Archive';
import HomeIcon from '@material-ui/icons/Home';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Link } from 'react-router-dom';
import isAdmin from '../User/isAdmin';

export const mainListItems = (cerrar, userRole) => (
  <div onClick={() => cerrar()}>
    <Link to="/home">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link to="/expediente">
      <ListItem button>
        <ListItemIcon>
          <ArchiveIcon />
        </ListItemIcon>
        <ListItemText primary="Expedientes" />
      </ListItem>
    </Link>
    { isAdmin(userRole) &&
    <>
    <Link to="/new/solicitud">
      <ListItem button>
        <ListItemIcon>
          <AttachFileIcon />
        </ListItemIcon>
        <ListItemText primary="Crear solicitud" />
      </ListItem>
    </Link>
    <Link to="/usuarios">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIndIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItem>
    </Link>
    </>}
  </div>
);
