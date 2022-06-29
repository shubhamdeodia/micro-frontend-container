import { AppBar, Button, CssBaseline, GlobalStyles, Toolbar, Typography } from '@mui/material';
import React from 'react';

import { Link, Link as RouterLink } from 'react-router-dom';

export default function Header() {

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <nav>
          <Link to="/">
            <Button  variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              App
            </Button>
          </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
