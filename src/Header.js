import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import GiteIcon from '@mui/icons-material/Gite';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import Logo from '../src/images/Logo.png';

function Header () {
    return(
        <div className='header'>
            <div className='header-left'>
                <h1>War Comms</h1>
                <div className='header-search'>
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className='header-right'>
                <HeaderOption Icon={GiteIcon} title="Home" />
                <HeaderOption Icon={Diversity3Icon} title="Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Message" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={Logo} title="me" />
            </div>
        </div>
    );
}

export default Header;