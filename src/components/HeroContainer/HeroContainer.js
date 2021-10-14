import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './HeroContainer.css';
import maimoText from '../../images/maimoBlack.png';
import background from '../../images/01.jpg'

const mystyle={
  background: 'linear-gradient(to right, #fafcff, #fafcff00)'
}

export default function HeroContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{
        mystyle, backgroundImage:
          `url(${background})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '65vh'
      }} maxWidth="xl">
        {children}
        <div id='logo'>
          <img src={maimoText} alt='Maimo News'></img>
          <span>Toda la actualidad en un sólo lugar</span>
        </div>
      </Container>
    </React.Fragment>
  );
}