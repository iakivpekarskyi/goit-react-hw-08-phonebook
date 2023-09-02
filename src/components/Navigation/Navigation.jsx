import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

import React from 'react';

export const Navigation = () => {
  return (
    <Box
      component="nav"
      sx={{ flexGrow: 1, flexWrap: 'wrap', display: { xs: 'flex' } }}
    >
      <NavLink to="/">
        <Button variant="contained">Home</Button>
      </NavLink>
    </Box>
  );
};
