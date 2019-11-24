import React, { useState, useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import TextField from '../Fields/TextField';
import useStyles from './style';
import apiCall from '../../redux/api';
import ErrorMessage from '../Error/ErrorFormMessage';


export default function ResetPasswordPage() {
  const [showVerifyEmail, setShowVerifyEmail] = useState(true);
  const nextForm = useCallback(() => {
    setShowVerifyEmail(false);
  }, []);
  return (
    <>
      {showVerifyEmail && <VerifyEmailForm next={nextForm} />}
      {!showVerifyEmail && <ResetPassword />}
    </>
  );
}

const validateEmail = Yup.object().shape({
  email: Yup.string().email('Ingrese un email válido').required('Por favor ingrese un email'),
});

export function VerifyEmailForm({ next }) {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validateEmail}
      onSubmit={(values, setFieldError) => {
        const { email } = values;
        apiCall('/password/forgotten', { email }, null, 'POST')
          .then(next())
          .catch(() => setFieldError.setFieldError('email', 'No existe un usuario con este mail'));
      }}
    >
      <Form>
        <div className={classes.paper}>
          <Field
            component={TextField}
            name="email"
            label="Ingresa tu email"
            variant="outlined"
            margin="normal"
          />
          <ErrorMessage name="email" />
          <Button
            type="submit"
            color="primary"
            variant="contained"
          >
Verificar email
          </Button>
        </div>
      </Form>
    </Formik>
  );
}

function ResetPassword() {
  const classes = useStyles();
  return (
    <Formik initialValues={{ email: '', code: '' }}>
      <Form>
        <div className={classes.paper}>
          <Field
            component={TextField}
            name="email"
            label="Ingresa tu email"
            variant="outlined"
            margin="normal"
          />
          <Field
            component={TextField}
            name="code"
            label="Ingresa el código"
            variant="outlined"
            margin="normal"
          />
          <Button color="primary" variant="contained">Ingresa</Button>
        </div>
      </Form>
    </Formik>
  );
}
