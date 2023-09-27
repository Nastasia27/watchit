import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logoImage from "./logo.png";
import logomin from './logomin.PNG';
import { NavLink } from 'react-router-dom';
import './ResponsiveAppBar.css';
import {MENU} from '../../constants/constants';
import Input from './Input';
import Link from '@mui/material/Link';
import LogOut from '../../pages/Auth/Logout';



const settings = ['Profile', 'Logout'];

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleLogOut = () => {
      LogOut();
    };
  

  return (
    <AppBar position="static" sx={{backgroundColor:"rgba(18, 17, 18, 0.79)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <img className='toolbar-image-2' src={logoImage} alt="logo" width={200}/>
            <img className='toolbar-image-1' src={logomin} alt="logo" width={50}/>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {MENU.map(({name, link}, index) => (
                <Link key={index} onClick={handleCloseNavMenu} href={link} underline="hover">
                  <Typography sx={{textAlign:'center', textTransform:'uppercase'}}>{name}</Typography>
                </Link>
              ))}
            </Menu>
          </Box>        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"center" }}>
            {MENU.map(({name, link}, index) => (
              <NavLink 
                key={index} 
                className={({isActive}) => `NavLink ${isActive ? 'isActive' :''}`
               }
                to={link}
              >
                {name}
              </NavLink>
            ))}
          </Box> 
          <Input></Input>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={ () => {handleCloseUserMenu(); handleLogOut()}}>
                  <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;