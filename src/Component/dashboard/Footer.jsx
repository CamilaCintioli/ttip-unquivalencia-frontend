import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Footer({ classes }) {
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {' Universidad Nacional de Quilmes, Ciencia y Tecnologia, Tecnicatura Universitaria en Programación Informática.'}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
}
