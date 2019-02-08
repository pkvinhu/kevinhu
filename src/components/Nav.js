import React, { Component } from 'react';
import '../App.css';
import { Icon, Paper } from '@material-ui/core';

class Nav extends Component {
    state={
        toggle: false
    }

    handleClick = () => {
        this.setState({ toggle: !this.state.toggle })
        console.log(this.state.toggle)
    }

    render() {
        const { handleClick } = this;
        
        return (

            <Paper className='App navbar navbar-light navbar-expand-md navbar-no-bg'>
                <img className="animated bounceInUp" alt='' src={require('../assets/initials.png')} />
                <div className="animated slideInRight delay-1s socialContainer">
                        <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kevin-hu-82673529/"><img alt="" className="social" src={require('../assets/linkedin_circle.png')}/></a>
                        <a  href="mailto:pkvinhu@gmail.com"><img alt="" className="social" src={require('../assets/gmaillogo.png')}/></a>
                        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/pkvinhu"><img alt="" className="social" src={require('../assets/github_circle.png')}/></a>
                        <a  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pkvinhu/"><img alt="" className="social" src={require('../assets/instagramlogo.png')}/></a>
                        <a  target="_blank" rel="noopener noreferrer" href="https://medium.com/@kvinhu/latest"><img alt="" className="social" src={require('../assets/mediumlogo.png')}/></a>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navBar"
                    aria-controls="navBar"
                    aria-expanded={this.state.toggle ? "true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={handleClick}
                >
                    <Icon>menu</Icon>
                </button>
                <div className="collapse navbar-collapse" id="navBar">
                    <a className='scroll-link navbar-brand item' href='#home'>Home</a>
                    <a className='scroll-link navbar-brand item' href='#about'>About Me</a>
                    <a className='scroll-link navbar-brand item' href='#tech'>Technologies</a>
                    <a className='scroll-link navbar-brand item' href='#projects'>Projects</a>
                    <a className='scroll-link navbar-brand item' href='#writing'>Writing</a>
                    <a className='scroll-link navbar-brand item' href='#education'>Education</a>
                    <a className='navbar-brand item' target="_blank" href="Software_Engineer_CV_v3.pdf">Resume</a>
                </div>
            </Paper>
        )
    }
}

export default Nav;