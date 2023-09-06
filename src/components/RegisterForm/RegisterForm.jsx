import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { register } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        GOIT Academy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function RegisterForm() {
  const dispatch = useDispatch();
  const formRef = React.useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = data.get('name');

    const email = data.get('email');

    const password = data.get('password');

    dispatch(register({ name, email, password }));
    formRef.current.reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Formik
            initialValues={{
              initialValues,
              allowExtraEmails: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form
              ref={formRef}
              onSubmit={formik => {
                formik.handleSubmit();
              }}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    required
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    autoComplete="off"
                    as={TextField}
                  />

                  <ErrorMessage name="name" component="div" />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Email Address"
                    autoComplete="off"
                    as={TextField}
                  />
                  <ErrorMessage name="email" component="div" />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    required
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="off"
                    as={TextField}
                  />
                  <ErrorMessage name="password" component="div" />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Field
                        type="checkbox"
                        name="allowExtraEmails"
                        color="primary"
                        as={Checkbox}
                      />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <NavLink to="/login" variant="body2">
                    Already have an account? Sign in
                  </NavLink>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
