import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        {' Universidad Nacional de Quilmes, Ciencia y Tecnologia, Tecnicatura Universitaria en Programación Informática. Licenciatura en Informática. '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
}
