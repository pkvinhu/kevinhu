import React, { Component } from 'react';
import '../App.css';
import FeatureTraits from './FeatureTraits';


class Header extends Component {
    render() {
        return (
            <div>
                <div className='header' id="header">
                <div className="header-content">
                    <div className="animated slideInLeft name">KEVIN HU</div>
                    <h4 className="animated slideInRight delay-1s title"><font color="#FEC339">SOFTWARE ENGINEER</font> AND WRITER</h4>
                    <div className="animated slideInRight delay-1s socialContainer">
                        <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kevin-hu-82673529/"><img alt="" className="social" src={require('../assets/linkedin_circle.png')}/></a>
                        <a  href="mailto:pkvinhu@gmail.com"><img alt="" className="social" src={require('../assets/gmaillogo.png')}/></a>
                        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/pkvinhu"><img alt="" className="social" src={require('../assets/github_circle.png')}/></a>
                        <a  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pkvinhu/"><img alt="" className="social" src={require('../assets/instagramlogo.png')}/></a>
                        <a  target="_blank" rel="noopener noreferrer" href="https://medium.com/@kvinhu/latest"><img alt="" className="social" src={require('../assets/mediumlogo.png')}/></a>
                </div>
                </div>
                <FeatureTraits />
                </div>
            </div>
        )
    }
}

export default Header;