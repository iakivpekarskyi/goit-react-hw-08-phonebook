import { Navigation } from '../Navigation/Navigation';
import { Authorization } from '../Authorization/Authorization';
import { UserMenu } from '../UserMenu/UserMenu';
// import { useAuth } from 'hooks';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material';

export const Header = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Grid container spacing={1}>
            <Navigation />
            {/* <UserMenu /> */}
            <Authorization />
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

//  {
//    isLoggedIn ? <UserMenu /> : <AuthNav />;
//  }
