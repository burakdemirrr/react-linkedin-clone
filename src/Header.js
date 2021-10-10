import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from './features/counter/userSlice';
import { auth } from './firebase';
import { useSelector } from 'react-redux';
function Header() {
    const dispatch=useDispatch();
    const logoutofApp = ()=>{
        dispatch(logout())
        auth.signOut();
        
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="./images/linkedin.svg" 
                alt="" 
                />

                <div className="header_search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>

                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption onClick={logoutofApp} avatar={true}  title="me" />

            </div>

        </div>
    )
}

export default Header
