import React, { useCallback } from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../../redux/actions/user';
import FeedbackBar from '../FeedbackBar';
import PasswordField from '../../Fields/PasswordField';
import ErrorMessage from '../../Error/ErrorFormMessage';

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

  const updatePassword = useCallback((password, newPassword, confirmPassword, setFieldError) => {
    dispatch(changePassword({
      password,
      newPassword,
      confirmPassword,
      showError: setFieldError,
    }));
  }, [dispatch]);

  return (
    <>
      <Typography variant="h4">Cambia tu contraseña</Typography>
      <hr />
      <Formik
        initialValues={{ password: '', newPassword: '', confirmPassword: '' }}
        validate={validateForm}
        onSubmit={({
          password,
          newPassword,
          confirmPassword,
        }, setFieldError) => updatePassword(password, newPassword, confirmPassword, setFieldError.setFieldError)}
      >
        <Form className={classes.form}>
          <Field
            name="password"
            component={PasswordField}
            label="Contraseña"
          />
          <ErrorMessage name="password" />
          <Field
            name="newPassword"
            component={PasswordField}
            label="Nueva contraseña"
          />
          <ErrorMessage name="newPassword" />
          <Field
            name="confirmPassword"
            component={PasswordField}
            label="Confirme su contraseña"
          />
          <ErrorMessage name="confirmPassword" />
          <Button className={classes.submit} type="submit" color="primary" variant="contained">Cambiar contraseña</Button>
          <FeedbackBar />
        </Form>
      </Formik>
    </>
  );
}
