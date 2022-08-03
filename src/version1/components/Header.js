import React, { Component } from 'react';
import '../../styles/Version1.css';
import FeatureTraits from './FeatureTraits';
import ContactForm from './ContactForm';
import sizeMe from 'react-sizeme';

class Header extends Component {
    state = {
        modalOpen: false
    }

    handleOpen = () => {
        this.setState({ modalOpen: true })
    }

    handleClose = () => {
        this.setState({ modalOpen: false })
    }

    render() {
        const { width } = this.props.size;
        return (
            <div>
                <div className='header' id="header">
                <div className="header-container">
                    <div className="header-content">
                        <div className="animated slideInLeft name">KEVIN HU</div>
                        <h4 className="animated slideInRight delay-1s title"><font color="#FEC339">WRITER</font> AND <font color="#2d5986">SOFTWARE ENGINEER</font></h4>
                        <div className="animated slideInRight delay-1s socialContainer">
                            <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kevin-hu-82673529/"><img alt="" className="social" src={require('../../assets/linkedin_circle.png')}/></a>
                            <a  href="mailto:pkvinhu@gmail.com"><img alt="" className="social" src={require('../../assets/gmaillogo.png')}/></a>
                            <a  target="_blank" rel="noopener noreferrer" href="https://github.com/pkvinhu"><img alt="" className="social" src={require('../../assets/github_circle.png')}/></a>
                            <a  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pkvinhu/"><img alt="" className="social" src={require('../../assets/instagramlogo.png')}/></a>
                            <a  target="_blank" rel="noopener noreferrer" href="https://medium.com/@kvinhu/latest"><img alt="" className="social" src={require('../../assets/mediumlogo.png')}/></a>
                        </div>
                    </div>
                </div>
                <FeatureTraits />
                {/*width > 768 &&*/ (
                <div>
                    <div className="btn floatingContact" onClick={this.handleOpen}>Contact</div>
                    <ContactForm handleClose={this.handleClose} modalOpen={this.state.modalOpen}/>
                </div>
                )}
                </div>
            </div>
        )
    }
}

export default sizeMe()(Header);