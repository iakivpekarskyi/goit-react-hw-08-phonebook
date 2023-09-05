import { useLog } from 'hooks/useLog';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useLog();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
