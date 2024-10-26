import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import siteLogo from '../../image/siteLogo.jpg';
import DrawerNavBar from './drawerNavBar';

export const PAGES = [
    { name: 'مقالات', route: '/articles' },
    { name: 'مدارک فنی', route: '/download' },
    { name: 'محصولات', route: '/products' },
    { name: 'خدمات پس از فروش', route: '/afterSaleService' },
    { name: 'تماس با عصرنوین', route: '/contact' },
    { name: 'درباره ما', route: '/about' },
    { name: 'عصرنوین', route: '/' },
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
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <DrawerNavBar />
                    </Box>
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
                            <Button className='navButton'
                                key={item.name}
                                onClick={() => {
                                    handleCloseNavMenu(item.route);
                                }}
                                sx={{ my: 2 }}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;