import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './style';

export default function Error404() {
  const classes = useStyles();
  const history = useHistory();
  return (

    <div className={classes.root}>
      <h1>404</h1>
      <h2>The route does not exist.</h2>
      <p>Sorry come</p>
      <button type="button" className="btn btn-primary" onClick={() => history.goBack()}>HOME</button>
    </div>

  );
}
