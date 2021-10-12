import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './HeroContainer.css'

export default function HeroContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        {children}
        <h1>Maimo News</h1>
        <p>Toda la actualidad en un sólo lugar</p>
      </Container>
    </React.Fragment>
  );
}