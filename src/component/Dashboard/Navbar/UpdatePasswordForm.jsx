import React, { useCallback } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { passwordError } from '../../../redux/selectors';
import { changePassword } from '../../../redux/actions/user';
import FeedbackBar from '../FeedbackBar';
import PasswordField from '../../Fields/PasswordField';

function validateForm(form) {
  const errors = {};
  if (!form.password) {
    errors.password = 'Por favor introduzca su contraseña';
  }
  if (!form.newPassword) {
    errors.newPassword = 'Por favor introduzca una nueva contraseña';
  }
  if (!form.confirmPassword) {
    errors.confirmPassword = 'Por favor confirme su contraseña';
  }
  if (form.newPassword !== form.confirmPassword) {
    errors.confirmPassword = 'No coincide con su nueva contraseña';
  }
  return errors;
}

const useStyles = makeStyles((theme) => ({
  error: {
    color: 'red',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '55%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UpdatePasswordForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const errors = useSelector((state) => passwordError(state));

  const updatePassword = useCallback((password, newPassword, confirmPassword) => {
    dispatch(changePassword({
      password,
      newPassword,
      confirmPassword,
    }));
  }, [dispatch]);

  const showPasswordErrorMessages = () => (
    <div className={classes.error}>
      {(errors.length !== 0 && errors.includes('Password incorrecto'))
         && <Typography variant="body2">Contraseña incorrecta</Typography>}
      <ErrorMessage name="password" />
    </div>
  );

  return (
    <>
      <Typography variant="h4">Cambia tu contraseña</Typography>
      <hr />
      <Formik
        initialValues={{ password: '', newPassword: '', confirmPassword: '' }}
        validate={validateForm}
        onSubmit={({ password, newPassword, confirmPassword }) => updatePassword(password, newPassword, confirmPassword)}
      >
        <Form className={classes.form}>
          <Field
            name="password"
            component={PasswordField}
            label="Contraseña"
          />
          {showPasswordErrorMessages()}
          <Field
            name="newPassword"
            component={PasswordField}
            label="Nueva contraseña"
          />
          <ErrorMessage name="newPassword" component="div" className={classes.error} />
          <Field
            name="confirmPassword"
            component={PasswordField}
            label="Confirme su contraseña"
          />
          <ErrorMessage name="confirmPassword" component="div" className={classes.error} />
          <Button className={classes.submit} type="submit" color="primary" variant="contained">Cambiar contraseña</Button>
          <FeedbackBar />
        </Form>
      </Formik>
    </>
  );
}
