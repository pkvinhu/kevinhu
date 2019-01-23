import React, { Component } from 'react';
import '../App.css';
import { Card, CardContent, CardMedia } from '@material-ui/core';


class Home extends Component {
    render() {
        return (
            <div className='home' id='home'>
                <Card className="bio">
                    <CardMedia
                        className="profilePic"
                        component="img"
                        image={require('../kevinhu_photo.png')}
                    />
                    <CardContent className="cardContent">
                        <h5>Kevin Hu</h5>
                        <h5></h5>
                    </CardContent>
                </Card>
                <div className="webContent">
                    <h5>Hi</h5>
                    <h5>information</h5>
                </div>
            </div>
        )
    }
}

export default Home;