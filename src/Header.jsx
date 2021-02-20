import { Avatar, IconButton } from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import StorefonteOutLinedIcon from '@material-ui/icons/StoreMallDirectoryOutlined';
import SubscriptionsOutlined from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://download.logo.wine/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.png"
                    alt=""
                    srcSet=""
                />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--active">
                <HomeIcon fontSize="large" />
                </div>
            
            <div className="header__option">
                <FlagIcon fontSize="large" />
            </div>
            <div className="header__option">
                <SubscriptionsOutlined fontSize="large" />
            </div>
            <div className="header__option">
                <StorefonteOutLinedIcon fontSize="large" />
            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon fontSize="large" />
            </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Bappy Mia</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Header;
