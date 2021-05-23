import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import {IconButton} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum'



function Header() {
    return (
        <div className="header">
        <IconButton>
      <PersonIcon fontSize="large" className="header-icon"/>
      </IconButton>
      <img
      className="header_logo"
      src="https://www.vectorico.com/wp-content/uploads/2018/02/Tinder-Logo.png"
      alt=""></img>
      <IconButton>
      <ForumIcon/>
      </IconButton>
        </div>
        
    )
}

export default Header
