import React from 'react';
import { useSelector } from 'react-redux';
import { getUserName } from '../../../redux/selectors';
import useStyles from '../Styles/style';

export default function UserInfoDisplay() {
  const classes = useStyles();
  const userName = useSelector((state) => getUserName(state));
  return (
    <div className={classes.userName}>
      {userName}
    </div>
  );
}
