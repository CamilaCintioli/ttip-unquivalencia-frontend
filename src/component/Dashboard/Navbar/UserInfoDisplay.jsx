import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { getUserName } from '../../../redux/selectors';
import useStyles from '../Styles/style';

export default function UserInfoDisplay() {
  const classes = useStyles();
  const userName = useSelector((state) => getUserName(state));
  return (
    <div className={classes.userName}>
      <Typography variant="subtitle1" className={classes.userName}>{userName}</Typography>
    </div>
  );
}
