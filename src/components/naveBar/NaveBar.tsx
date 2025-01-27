import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { navItems } from '../../common/constens';
import palette from '../../theme/palette';
import typography from '../../theme/typography';
import AdjustIcon from '@mui/icons-material/Adjust';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

//images 
import flag from '../../assets/images/flag.png';


interface Props {
    window?: () => Window;
}

const drawerWidth: number = 240;
export default function NaveBar(props: Props) {
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" >
                COCA
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
              
                <Toolbar sx={{
                    display:'flex',
                    justifyContent: { xs: 'space-between', md: 'space-around' }
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: "row",
                            gap: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Box sx={{ alignItems: "center", display: "flex" }}>
                            <AdjustIcon fontSize="medium" />
                        </Box>
                        <Typography
                            variant="h6"
                            component="div"
                        >
                            COCA
                        </Typography>
                    </Box>

                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: palette.text.primary, fontFamily: typography.fontFamily }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Box >
                            <Button variant="outlined" sx={{ backgroundColor: palette.whiteLight.light, borderRadius: 2 }}>
                                <PersonAddOutlinedIcon fontSize='medium' sx={{ color: "black" }} />
                            </Button>
                        </Box>
                        <Box >
                            <Button variant="outlined" size='medium' sx={{ backgroundColor: palette.whiteLight.light, borderRadius: 2 }}>
                                <Box color={palette.text.primary} sx={{ display: "flex", gap: 2 }} >

                                    <img src={flag} alt="flag" width={20} height={20} />
                                    <Typography variant='subtitle2'>
                                        AR
                                    </Typography>
                                </Box>
                            </Button>

                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}
