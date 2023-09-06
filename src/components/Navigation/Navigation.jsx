import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

import React from 'react';
import { useLog } from 'hooks/useLog';

export const Navigation = () => {
  const { isLoggedIn } = useLog();
  return (
    <Box
      component="nav"
      sx={{ flexGrow: 1, gap: 1, flexWrap: 'wrap', display: { xs: 'flex' } }}
    >
      <NavLink to="/">
        <Button variant="contained">Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button variant="contained">Contacts</Button>
        </NavLink>
      )}
    </Box>
  );
};
