import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

export default function SimpleMenu({ logout, changePassword }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const updatePassword = useCallback(() => {
    changePassword();
    handleClose();
  }, [changePassword]);

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <Avatar
          src="https://icon-library.net/images/user-icon-image/user-icon-image-20.jpg"
        />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={updatePassword}>Cambiar contraseña</MenuItem>
      </Menu>
    </div>
  );
}


SimpleMenu.propTypes = {
  logout: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
};
