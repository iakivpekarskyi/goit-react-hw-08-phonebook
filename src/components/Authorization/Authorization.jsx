import Box from '@mui/material/Box';

import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Authorization = () => {
  return (
    <Box component="nav" sx={{ flexWrap: 'wrap', display: { xs: 'flex' } }}>
      <NavLink to="/login">
        <Button variant="outlined" sx={{ m: '10s' }}>
          LogIn
        </Button>
      </NavLink>

      <NavLink to="/register">
        <Button variant="outlined">Register</Button>
      </NavLink>
    </Box>
  );
};
