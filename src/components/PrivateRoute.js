import { useLog } from 'hooks/useLog';
import { Outlet, useNavigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { isLoggedIn } = useLog();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  return <Outlet />;
}

// In React Router version 6, the Redirect component has been replaced with the useNavigate hook, which allows you to programmatically navigate to a different route. To achieve the same functionality as the Redirect component in version 6, you can do the following:
