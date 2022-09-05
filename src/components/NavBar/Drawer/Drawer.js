import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box'
import './Drawer.scss'

import { useState } from 'react';

const DrawerRes = () => {

    const [open, setOpen] = useState(true);
    const [openSub, setOpenSub] = useState(true)

    const handleClick = () => {
      setOpen(!open);
    };

    const handleClickSub = () => {
        setOpenSub(!openSub)
    }

    return(
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton>
                <p>Home</p>
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
                <p>Productos</p>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit className='containerCollapse'>
                <div >
                    <Box sx={{ pl: 4, display:'block'}}>
                        <ListItemButton>Ver todo</ListItemButton>
                        <ListItemButton onClick={handleClickSub}>
                            Mates
                            {openSub ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openSub} timeout="auto" unmountOnExit className='containerCollapse'>
                            <div>
                                <Box sx={{pl: 4, display: 'block'}}>
                                    <ListItemButton>Ver todos</ListItemButton>
                                    <ListItemButton>Imperiales</ListItemButton>
                                    <ListItemButton>Torpedos</ListItemButton>
                                    <ListItemButton>Camioneros</ListItemButton>
                                    <ListItemButton>Otros</ListItemButton>
                                </Box>
                            </div>
                        </Collapse>
                        <ListItemButton>Bombillas</ListItemButton>
                        <ListItemButton>Accesorios</ListItemButton>
                        <ListItemButton>Yerbas</ListItemButton>
                    </Box>
                </div>
            </Collapse>
            <ListItemButton>
                <p>Contacto</p>
            </ListItemButton>
        </List>
    )
}

export default DrawerRes