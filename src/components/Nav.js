import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import '../App.css';
import { Icon, Button } from '@material-ui/core';

class Nav extends Component {
    state={
        toggle: false
    }

    handleClick = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        const { handleClick } = this;
        
        return (
            <nav className='App navbar navbar-light navbar-expand-md'>
                <img alt='' src={require('../initials.png')} />
                <Button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navBar"
                    aria-controls="navBar"
                    aria-expanded={this.state.toggle ? " true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={handleClick}
                >
                    <Icon>menu</Icon>
                </Button>
                <div className={this.state.toggle ? "" : "collapse navbar-collapse"} id="#navBar">
                    <a className='nav-link scroll-link navbar-brand item' href='#home'>Home</a>
                    <a className='nav-link scroll-link navbar-brand item' href='#about'>About Me</a>
                    <a className='nav-link scroll-link navbar-brand item' href='#tech'>Technologies</a>
                    <a className='nav-link scroll-link navbar-brand item' href='#projects'>Projects</a>
                    <a className='nav-link scroll-link navbar-brand item' href='#writing'>Writing</a>
                    <a className='nav-link scroll-link navbar-brand item' href='#education'>Education</a>
                    <a className='nav-link scroll-link navbar-brand item' target="_blank" rel="noopener noreferrer" href="https://medium.com/@kvinhu/latest">Blog</a>
                    <a className='nav-link scroll-link navbar-brand item' target="_blank" rel="noopener noreferrer" href="Software_Engineer_CV_v3.pdf">Resume</a>
                </div>
            </nav>
        )
    }
}

export default Nav;