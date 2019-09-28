import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  }),
);

export default function ListMateria({materia}) {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
        <li key={`1`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{'CONTENIDOS MINIMOS DE LA MATERIA:'}</ListSubheader>
            {materia.map(item => (
              <ListItem key={`item-${item}`}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </ul>
        </li>
    </List>
  );
}