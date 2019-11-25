import React, { useState, useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { Typography, Link } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '../Fields/TextField';
import useStyles from './style';
import apiCall from '../../redux/api';
import ErrorMessage from '../Error/ErrorFormMessage';
import FeedbackBar, { openSnackbar } from '../Dashboard/FeedbackBar';

export default function ResetPasswordPage() {
  const [showVerifyEmail, setShowVerifyEmail] = useState(false);
  const nextForm = useCallback(() => {
    setShowVerifyEmail(false);
  }, []);
  return (
    <>
      {showVerifyEmail && <VerifyEmailForm next={nextForm} />}
      {!showVerifyEmail && <ResetPasswordForm />}
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
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validateEmailForm}
      onSubmit={(values, setFieldError) => {
        setLoading(true);
        const { email } = values;
        apiCall('/password/forgotten', { email }, null, 'POST', null)
          .then(() => {
            setLoading(false);
            next();
          })
          .catch((error) => {
            setLoading(false);
            handleErrors(error.response.data, setFieldError.setFieldError);
          });
      }}
    >
      <Form>
        <div className={classes.paper}>
          <Typography variant="h5">Reestablece tu contraseña</Typography>
          <Typography variant="caption">Se te enviará un correo electronico con el código a ingresar</Typography>
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
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Verificar email'}
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

function ResetPasswordForm() {
  const classes = useStyles();
  const [showSuccessInfo, setShowSuccessInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      initialValues={{ email: '', code: '' }}
      validationSchema={validateResetPasswordForm}
      onSubmit={(values, setFieldError) => {
        setLoading(true);
        const { email, code } = values;
        apiCall('/password/code', { email, code }, null, 'POST', null)
          .then(() => {
            setLoading(false);
            setShowSuccessInfo(true);
          })
          .catch((error) => {
            setLoading(false);
            handleErrors(error.response.data, setFieldError.setFieldError);
          });
      }}
    >
      <Form>
        <div className={classes.paper}>
          <Typography variant="h5">Reestablece tu contraseña</Typography>
          <Typography variant="caption">Ingresa el código que recibiste por correo.</Typography>
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
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Confirmar código'}
          </Button>
          { showSuccessInfo
          && (
            <>
              <Typography variant="caption">Te enviaremos una nueva contraseña para que puedas ingresar al sistema.</Typography>
              <Typography variant="caption">Una vez en el sistema podés cambiarla.</Typography>
              <Link href="/">Log in</Link>
            </>
          )}
        </div>
      </Form>
    </Formik>
  );
}
