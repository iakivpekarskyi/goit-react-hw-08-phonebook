import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUsername,
  selectIsRefreshing,
} from 'redux/auth/auth-selectors';

export const useLog = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUsername);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isLoggedIn,
    user,
    isRefreshing,
  };
};
