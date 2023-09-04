import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useLog } from 'hooks/useLog';

export const Header = () => {
  const { isLoggedIn } = useLog();
  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{ backgroundColor: 'white' }}
      elevation={1}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Grid container spacing={1}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
