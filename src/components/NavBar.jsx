import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { AccountCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocalMoviesIcon sx={{ display: 'flex', mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MOVIES
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" href="/movies">
            Filmai
          </Button>
          <IconButton color="inherit" href="/login">
            <AccountCircle fontSize="large" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
