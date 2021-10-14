import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'
import './MenuDrawer.css'
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import WorkIcon from '@mui/icons-material/Work';
import ComputerIcon from '@mui/icons-material/Computer';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FlagIcon from '@mui/icons-material/Flag';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GamepadIcon from '@mui/icons-material/Gamepad';

export default function TemporaryDrawer({ isOpen, toggleDrawer }) {

    const secciones = [
        { label: 'Deportes', url: 'deportes', icon: <SportsFootballIcon style={{fontSize:'large', fill:'white'}}/>},
        { label: 'Politica', url: 'politica', icon: <WorkIcon style={{fontSize:'large', fill:'white'}}/> },
        { label: 'Tecnologia', url: 'tecnologia', icon: <ComputerIcon style={{fontSize:'large', fill:'white'}}/>},
        { label: 'Espectaculos', url: 'espectaculos', icon: <TheaterComedyIcon style={{fontSize:'large', fill:'white'}}/> },
        { label: 'Internacionales', url: 'internacionales', icon:  <FlagIcon style={{fontSize:'large', fill:'white'}}/>},
        { label: 'Diseño', url: 'diseño', icon: <DesignServicesIcon style={{fontSize:'large', fill:'white'}}/> },
        { label: 'Gaming', url: 'gaming', icon: <GamepadIcon style={{fontSize:'large', fill:'white'}}/> }
    ]

    const list = (anchor) => (

        <Box style= {{backgroundColor: '#0d152c', marginTop: '4.3%'}}
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                {secciones.map(({ label, url, icon }) =>//Un map donde se dice que para cada una de las secciones genera el link correspondiente de acuerdo a lo seleccionado.
                    <Link to={`/category/${url}`} style={{color: 'white'}}>
                        <ListItem button>
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                )}
            </List>
        </Box>
    );

    return (
        <>
            <Drawer
                anchor={'left'}
                open={isOpen}
                onClose={toggleDrawer}
            >
                {list('left')}
            </Drawer>
        </>
    );
}