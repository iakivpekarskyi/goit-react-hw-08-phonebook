import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Button, Grid } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        display: { xs: 'flex' },
        alignItems: 'center',
        pt: 10,
        flexDirection: 'column',
      }}
    >
      <Grid container spacing={3}>
        <Grid xs>
          <Button href="/" variant="contained">
            Home
          </Button>
        </Grid>
        <Grid xs>
          <Button href="/" variant="contained">
            LogIn
          </Button>
        </Grid>
        <Grid xs>
          <Button href="/" variant="contained">
            Register
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ width: 1, pb: 1, mb: 1 }} />
    </Box>
  );
}
