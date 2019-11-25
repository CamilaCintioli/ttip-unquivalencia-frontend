import React from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { Link } from '@material-ui/core';
import TextField from '../Fields/TextField';
import useStyles from './style';
import { userError } from '../../redux/selectors';
import ErrorMessage from '../Error/ErrorFormMessage';
import PasswordField from '../Fields/PasswordField';


const validateSignUp = Yup.object().shape({
  email: Yup.string()
    .email('Ingrese un email válido')
    .required('Por favor ingrese un email'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required('Por favor ingrese su contraseña'),
});


export default function SignIn({ onLogin }) {
  const loginErrors = useSelector((state) => userError(state));
  const classes = useStyles();

  const showMailErrorMessages = () => (
    <div>
      {(loginErrors.length !== 0 && loginErrors[0].includes('inexistente'))
         && <Typography variant="body2" color="error">El mail es incorrecto</Typography>}
      <ErrorMessage name="email" />
    </div>
  );

  const showPasswordErrorMessages = () => (
    <div>
      {(loginErrors.length !== 0 && loginErrors[0].includes('Password'))
         && <Typography variant="body2" color="error">La contraseña es incorrecta</Typography>}
      <ErrorMessage name="password" />
    </div>
  );

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        onLogin(values);
      }}
      validationSchema={validateSignUp}
    >
      {({ setFieldValue, values, errors }) => (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <Form className={classes.form} noValidate>
              <Field name="email" component={TextField} label="Email" variant="outlined" fullWidth margin="normal" />
              {showMailErrorMessages()}
              <Field name="password" component={PasswordField} label="Password" variant="outlined" fullWidth margin="normal" />
              {showPasswordErrorMessages()}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
              >
              Sign In
              </Button>
              <Link href="/recuperar-contraseña">
                ¿Olvidaste tu contraseña?
              </Link>
            </Form>
          </div>
        </Container>
      )}

    </Formik>
  );
}
