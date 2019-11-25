import React from 'react';
import { ErrorMessage } from 'formik';
import useStyles from './style';

export default function ErrorFormMessage({ name }) {
  const classes = useStyles();
  return (
    <div className={classes.error}>
      <ErrorMessage name={name} />
    </div>
  );
}
