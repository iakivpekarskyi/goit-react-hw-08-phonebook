import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLog } from 'hooks/useLog';
import { logOut } from 'redux/auth/auth-operations';

export function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useLog();

  return (
    <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography sx={{ color: '#2990ff' }} variant="h6">
        Welcome, {user.name}
      </Typography>
      <LogoutIcon
        sx={{ color: '#2990ff', ml: 14, cursor: 'pointer' }}
        onClick={() => dispatch(logOut())}
      />
    </Box>
  );
}
