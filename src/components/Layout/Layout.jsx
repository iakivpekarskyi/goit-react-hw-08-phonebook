import React from 'react';
import { Outlet } from 'react-router-dom';

// import { AppBar } from 'components/AppBar/AppBar';
import Home from '../../pages/Home';

const Layout = () => {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
};

export default Layout;
