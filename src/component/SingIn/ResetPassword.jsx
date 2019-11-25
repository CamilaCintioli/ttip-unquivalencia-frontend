import React, { useState, useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import TextField from '../Fields/TextField';
import useStyles from './style';
import apiCall from '../../redux/api';
import ErrorMessage from '../Error/ErrorFormMessage';
import FeedbackBar, { openSnackbar } from '../Dashboard/FeedbackBar';

export default function ResetPasswordPage() {
  const [showVerifyEmail, setShowVerifyEmail] = useState(true);
  const nextForm = useCallback(() => {
    setShowVerifyEmail(false);
  }, []);
  return (
    <>
      {showVerifyEmail && <VerifyEmailForm next={nextForm} />}
      {!showVerifyEmail && <ResetPassword />}
      <FeedbackBar />
    </>
  );
}

const validateEmailForm = Yup.object().shape({
  email: Yup.string().email('Ingrese un email válido').required('Por favor ingrese un email'),
});


const handleError = (error, setFieldError) => {
  switch (error) {
    case 'Invalid code':
      setFieldError('code', 'El código que ingresó es inválido'); break;
    case 'No existe el email':
      setFieldError('email', 'El email que ingresó no se encuentra en el sistema'); break;
    default:
      openSnackbar('Hubo un problema. Intentelo más tarde', 'error');
  }
};

const handleErrors = (errors, setFieldError) => {
  errors.forEach((error) => {
    handleError(error, setFieldError);
  });
};

export function VerifyEmailForm({ next }) {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validateEmailForm}
      onSubmit={(values, setFieldError) => {
        const { email } = values;
        apiCall('/password/forgotten', { email }, null, 'POST', null)
          .then(() => {
            next();
          })

          .catch((error) => handleErrors(error.response.data, setFieldError.setFieldError));
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

const validateResetPasswordForm = Yup.object().shape({
  email: Yup.string().email('Ingrese un email válido').required('Por favor ingrese un email'),
  code: Yup.string().required('Por favor ingrese el código'),
});

function ResetPassword() {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ email: '', code: '' }}
      validationSchema={validateResetPasswordForm}
      onSubmit={(values, setFieldError) => {
        const { email, code } = values;
        apiCall('/password/code', { email, code }, null, 'POST', null)
          .then(() => openSnackbar('Se le ha enviado una nueva contraseña a su correo', 'success'))
          .catch((error) => {
            handleErrors(error.response.data, setFieldError.setFieldError);
          });
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
          <Field
            component={TextField}
            name="code"
            label="Ingresa el código"
            variant="outlined"
            margin="normal"
          />
          <ErrorMessage name="code" />
          <Button color="primary" variant="contained" type="submit">Ingresa</Button>
        </div>
      </Form>
    </Formik>
  );
}
