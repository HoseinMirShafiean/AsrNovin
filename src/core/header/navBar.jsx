import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import siteLogo from '../../image/siteLogo.jpg';
import DrawerNavBar from './drawerNavBar';

export const PAGES = [
    { id: 1, name: 'مقالات', route: '/articles' },
    { id: 2, name: 'مدارک فنی', route: '/download' },
    { id: 3, name: 'محصولات', route: '/products' },
    { id: 4, name: 'خدمات پس از فروش', route: '/afterSaleService' },
    { id: 5, name: 'تماس با عصرنوین', route: '/contact' },
    { id: 6, name: 'درباره ما', route: '/about' },
    { id: 7, name: 'عصرنوین', route: '/' },
]

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null)
    const navigate = useNavigate();
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (route) => {
        setAnchorElNav(null);
        navigate(route)
    };

    return (
        <AppBar position="fixed" className='AppBarInParent'>
            <Container >
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        className='TypographyInMenu'
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                    </Typography>

                    <a href="/"><img className='nav-logo' src={siteLogo} alt="Logo" /></a>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        className='TypographyInMenu'
                        sx={{
                            display: { xs: 'flex', md: 'none' }, flexGrow: 1,
                        }}
                    >
                    </Typography>
                    <Box sx={{ flexGrow: 1, direction: 'rtl', display: { xs: 'none', md: 'flex' } }}>
                        {PAGES?.map((item) => (
                            <Button className='navButton cursor'
                                key={item.id}
                                onClick={() => {
                                    handleCloseNavMenu(item.route);
                                }}
                                sx={{ my: 2 }}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <DrawerNavBar className="rightDrawer" />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;