import Box from '@mui/material/Box';

import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { IOSSwitch } from 'components/DarkMode/Switch';

export const AuthNav = () => {
  return (
    <Box component="nav" sx={{ flexWrap: 'wrap', display: { xs: 'flex' } }}>
      <NavLink to="/login">
        <Button variant="outlined" sx={{ mr: 3 }}>
          LogIn
        </Button>
      </NavLink>
      <NavLink to="/register">
        <Button variant="outlined">Register</Button>
      </NavLink>
      <IOSSwitch sx={{ ml: 4 }} />
    </Box>
  );
};
