import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import TextFieldUI from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import useStyles from './SingIn/style';
import { userError } from '../redux/selectors';


const validateSignUp = Yup.object().shape({
  email: Yup.string()
    .email('Should be a valid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must have al least 8 characters')
    .required('Required'),
});


export default function SignIn({ onLogin }) {
  const loginErrors = useSelector((state) => userError(state));
  const classes = useStyles();

  const showMailErrorMessages = () => (
    <div>
      {(loginErrors.length !== 0 && loginErrors[0].includes('inexistente'))
         && <Typography variant="body2">Incorrect email</Typography>}
      <ErrorMessage name="email" />
    </div>
  );

  const showPasswordErrorMessages = () => (
    <div>
      {(loginErrors.length !== 0 && loginErrors[0].includes('Password'))
         && <Typography variant="body2">Incorrect password</Typography>}
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
              <Field name="password" component={TextField} label="Password" variant="outlined" type="password" fullWidth margin="normal" />
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
            </Form>
          </div>
        </Container>
      )}

    </Formik>
  );
}

function TextField({
  form: { handleFocus, handleChange, handleBlur },
  field: { name, value }, ...props
}) {
  return (
    <TextFieldUI
      {...props}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
    />
  );
}
