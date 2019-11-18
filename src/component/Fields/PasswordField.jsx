import React, { useState } from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from './TextField';

export default function PasswordField(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (

    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      variant="outlined"
      margin="normal"
      InputProps={{
        endAdornment:
  <InputAdornment>
    <IconButton
      onClick={handleClickShowPassword}
    >
      {showPassword ? <Visibility /> : <VisibilityOff />}
    </IconButton>
  </InputAdornment>,
      }}
    />
  );
}
