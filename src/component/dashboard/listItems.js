import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArchiveIcon from '@material-ui/icons/Archive';
import HomeIcon from '@material-ui/icons/Home';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Link } from 'react-router-dom';

export const mainListItems = (cerrar) => (
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
    <Link to="/new/solicitud">
      <ListItem button>
        <ListItemIcon>
          <AttachFileIcon />
        </ListItemIcon>
        <ListItemText primary="Crear Expediente" />
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
  </div>
);
