import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import './RecipeReviewCard.css'
import ln from '../../images/laNacion.png'
import amb from '../../images/ambito.png'
import clarin from '../../images/clarin.png'
import dr from '../../images/dr.jpg'
import infobae from '../../images/infobae.png'
import ole from '../../images/ole.png'
import perfil from '../../images/perfil.png'
import telam from '../../images/telam.png'
import ip from '../../images/ip.jpg'
import ra from '../../images/ra.jpg'


export default function RecipeReviewCard({ noticia }) {
  const { img_url, source_name, title, url, date } = noticia

  const fuente = {
    Ámbito: amb,
    InfoBae: infobae,
    Clarin: clarin,
    La_Nacion: ln,
    Olé: ole,
    Perfil: perfil,
    Registrado: dr,
    Telam: telam,
    RED_ACCION: ra,
    iProfesional: ip
  }

  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <Card sx={{ maxWidth: 365 }}>
        <CardHeader
          avatar={
            //source_name.forEach(element => {
              //if (element === fuente) {
                <Avatar>
                  <img src={source_name} alt='logo'></img>
                </Avatar>
              //}

            //})
          }
          title={source_name}
          subheader={dayjs.unix(date).locale("es").format('MMMM D, YYYY')}
        />
        <CardMedia
          component="img"
          height="194"
          image={img_url}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </a >
  );
}