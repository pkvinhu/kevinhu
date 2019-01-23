import React, { Component } from 'react';
import '../App.css';
import { IconButton } from '@material-ui/core';


class Home extends Component {
    state = {
        transform: false
    }

    handleClick = () => {
        this.setState({ transform: !this.state.transform })
    }

    render() {
        const { transform } = this.state;
        const { handleClick } = this;
        return (
            <div className='home' id='home'>
                    <div className="bio">
                    <img
                        className={transform ? "profilePic transform" : "profilePic"}
                        src={require('../kevinhu_photo.png')}
                    />
                    
                    </div>
                    <IconButton className="qualities" onClick={handleClick}>account_circle</IconButton>
                {/*<div className="webContent">
                    <h5>Hi</h5>
                    <h5>information</h5>
                </div>*/}
            </div>
        )
    }
}

export default Home;