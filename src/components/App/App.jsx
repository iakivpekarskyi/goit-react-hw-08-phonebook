import { Routes, Route, Outlet } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

import PrivateRoute from 'components/PrivateRoute';
import Layout from '../Layout/Layout';
// import { RestrictedRoute } from 'components/PublicRoute';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/contacts"
          element={
            <Route element={<Outlet />}>
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            </Route>
          }
        />
      </Route>
    </Routes>
  );
};
