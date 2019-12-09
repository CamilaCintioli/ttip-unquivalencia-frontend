import React, { useState } from 'react';
import {
  Button,
} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function DelegateButton({ delegateEquivalence }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickItem = (item) => {
    delegateEquivalence(item);
    handleClose();
  };

  return (
    <div>
      <Button aria-controls="simple-menu" variant="contained" color="primary" aria-haspopup="true" onClick={handleClick}>
          Delegar
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClickItem('Gira a la Coordinación de Idiomas')}>Idiomas</MenuItem>
        <MenuItem onClick={() => handleClickItem('Gira a la Coordinación de Ciclo Introductorio')}>Ciclo Introductorio</MenuItem>
        <MenuItem onClick={() => handleClickItem('Gira a la Coordinación del Área Matemática')}>Área Matemática</MenuItem>

      </Menu>
    </div>
  );
}
