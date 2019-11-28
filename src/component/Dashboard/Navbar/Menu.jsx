import React, { useCallback } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import { useSelector } from 'react-redux';
import useStyles from '../Styles/style';
import { getUserName } from '../../../redux/selectors';

export default function SimpleMenu({ logout, changePassword }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const userInitial = useSelector((state) => getUserName(state))[0];

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
      <Fab className={classes.userMenuButton} size="medium" onClick={handleClick}>{userInitial}</Fab>
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
