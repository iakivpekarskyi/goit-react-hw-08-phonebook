import { useLog } from 'hooks/useLog';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const { isLoggedIn } = useLog();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

// In React Router version 6, the Redirect component has been replaced with the useNavigate hook, which allows you to programmatically navigate to a different route. To achieve the same functionality as the Redirect component in version 6, you can do the following:
