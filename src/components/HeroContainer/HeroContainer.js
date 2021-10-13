import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './HeroContainer.css';
import maimoText from '../../images/maimoBlack.png';

export default function HeroContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        {children}
        <div id='logo'>
          <img src={maimoText} alt='Maimo News'></img>
          <span>Toda la actualidad en un sólo lugar</span>
        </div>
      </Container>
    </React.Fragment>
  );
}