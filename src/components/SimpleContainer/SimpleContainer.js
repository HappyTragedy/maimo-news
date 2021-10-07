import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function SimpleContainer({Children}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        {Children}
      </Container>
    </React.Fragment>
  );
}