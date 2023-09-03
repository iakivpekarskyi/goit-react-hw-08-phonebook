import { Typography } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Typography variant="h1">Home Page</Typography>
      <Typography variant="h5" sx={{ m: 3 }}>
        1. **Home Page:** - Display a welcome message or an introduction to your
        app.
      </Typography>

      <Typography variant="h5" sx={{ m: 3 }}>
        2. **Register Page:** - Allow users to register with their email and
        password. - Implement validation for the registration form, including
        password strength requirements and email format checks. - Handle user
        registration with a backend server, including user data storage.
      </Typography>
      <Typography variant="h5" sx={{ m: 3 }}>
        3. **Login Page:** - Provide a login form where users can enter their
        credentials (email and password). - Implement client-side validation for
        the login form. - Authenticate users against the server, verifying their
        credentials. - Create a session or token for the authenticated user.
      </Typography>
      <Typography variant="h5" sx={{ m: 3 }}>
        4. **Authentication:** - Implement authentication flows, such as
        session-based or token-based authentication. - Secure routes or
        resources that require authentication. For example, users should only be
        able to access the Contacts page after logging in.
      </Typography>
      <Typography variant="h5" sx={{ m: 3 }}>
        5. **Contacts Page:** - Create a page where authenticated users can
        manage their contacts. - Implement features like adding, editing, and
        deleting contacts. - Use a database or server to persist user contacts.
      </Typography>
      <Typography variant="h5" sx={{ m: 3 }}>
        6. **Contact Form:** - Create a form for adding or editing contacts. -
        Include fields for name, phone number, email, etc. - Implement
        validation to ensure the data is correctly formatted.
      </Typography>
    </div>
  );
};

export default HomePage;
