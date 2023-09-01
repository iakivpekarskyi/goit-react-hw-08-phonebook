import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Loader } from 'components/Loader/Loader';
// import { AppBar } from 'components/AppBar/AppBar';
import { Test } from 'pages/Test';

export const Layout = () => {
  return (
    <>
      <Test />
      <Outlet />
    </>
  );
};
