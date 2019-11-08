import React from 'react';
import useStyles from './style';

export default function Error401({ history }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>401</h1>
      <h2>unauthorized</h2>
      <p>sorry come</p>
      <button type="button" className="btn btn-primary" onClick={() => history.push('/home')}>HOME</button>
    </div>

  );
}
