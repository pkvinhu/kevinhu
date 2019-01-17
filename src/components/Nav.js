import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import '../App.css';
// import { Menu, MenuItem, Icon, Button, ClickAwayListener } from '@material-ui/core';

class Nav extends Component {
    render() {
        return (
            <nav className='App navbar navbar-light'>
                <img alt='' src={require('../logo-via-logohub.png')} />
                <div>
                    <a className='nav-link scroll-link navbar-brand' href='#home'>Home</a>
                    <a className='nav-link scroll-link navbar-brand' href='#about'>About Me</a>
                    <a className='nav-link scroll-link navbar-brand' href='#projects'>Projects</a>
                    <a className='nav-link scroll-link navbar-brand' href='#education'>Education</a>
                    <a className='nav-link scroll-link navbar-brand' href='#resume'>Resume</a>
                </div>
            </nav>
        )
    }
}

export default Nav;