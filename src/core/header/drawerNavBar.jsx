import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function DrawerNavBar(props) {
  const { classNameList } = props;
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const firstList = [
    { id: '0', name: 'مقالات', route: '/articles' },
    { id: '1', name: 'مدارک فنی', route: '/download', },
    { id: '2', name: 'محصولات', route: '/products', },
    { id: '3', name: 'خدمات پس از فروش', route: '/afterSaleService', },
  ];
  const secondList = [
    { id: '0', name: 'درباره ما', route: '/about', },
    { id: '1', name: 'عصرنوین', route: '/', },
    { id: '2', name: 'تماس با عصرنوین', route: '/contact', },
  ];

  const navigate = useNavigate();
  const handleMenuFitstList = (route) => {
    navigate(route)
  };
  const handleMenuSecondList = (route) => {
    navigate(route)
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {firstList.map((item, index) => (
          <ListItem key={item.id}
            onClick={() => {
              handleMenuFitstList(item.route);
            }}
            disablePadding>
            <ListItemButton>
              <ListItemText primary={item.name} className='drawerDir' />
              <ListItemIcon className='minIcon'>
                {index % 4 === 0 ? <AutoStoriesIcon /> :
                  index % 3 === 0 ? <SupportAgentIcon /> :
                    index % 2 === 0 ? <ShoppingBagIcon /> : <FileDownloadIcon />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondList.map((item, index) => (
          <ListItem key={item.id}
            onClick={() => {
              handleMenuSecondList(item.route);
            }}
            disablePadding>
            <ListItemButton>
              <ListItemText primary={item.name} className='drawerDir' />
              <ListItemIcon className='minIcon'>
                {index % 3 === 0 ? <InfoIcon /> : index % 2 === 0 ? <LocalPhoneIcon /> : <HomeIcon />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

    </div>
  );
}