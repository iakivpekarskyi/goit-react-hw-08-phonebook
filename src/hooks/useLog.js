import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUsername } from 'redux/auth/auth-selectors';

export const useLog = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUsername);

  return {
    isLoggedIn,
    user,
  };
};
