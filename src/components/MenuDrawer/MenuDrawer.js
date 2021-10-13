import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'
import './MenuDrawer.css'

export default function TemporaryDrawer({ isOpen, toggleDrawer }) {

    const secciones = [
        { label: 'Deportes', url: 'deportes'},
        { label: 'Politica', url: 'politica' },
        { label: 'Tecnologia', url: 'tecnologia' },
        { label: 'Espectaculos', url: 'espectaculos' },
        { label: 'Internacionales', url: 'internacionales' },
        { label: 'Diseño', url: 'diseño' },
        { label: 'Gaming', url: 'gaming' }
    ]

    const list = (anchor) => (

        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                {secciones.map(({ label, url }) =>//Un map donde se dice que para cada una de las secciones genera el link correspondiente de acuerdo a lo seleccionado.
                    <Link to={`/category/${url}`}>
                        <ListItem button>
                            <ListItemIcon>
                                <ArrowRightIcon style={{fontSize:'large', fill:'white'}}/>
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