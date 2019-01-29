import React, { Component } from 'react';
import '../App.css';
import { Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';

class Writing extends Component {
    render() {
        return (
            <div className='section grid-container' id='writing'>
                <div className="grid-item item1"><Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={require("../CultivatingAppetites.png")}
                        />
                        <CardContent>
                        </CardContent>
                    </CardActionArea>
                </Card></div>
                <div className="grid-item item2"><Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={require("../EngagingPower.png")}
                        />
                        <CardContent>
                        </CardContent>
                    </CardActionArea>
                </Card></div>                
                <div className="grid-item item3"><Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={require("../NamingViolence.png")}
                        />
                        <CardContent>
                        </CardContent>
                    </CardActionArea>
                </Card></div>                
                <div className="grid-item item4"><Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={require("../ExcavatingMemory.png")}
                        />
                        <CardContent>
                        </CardContent>
                    </CardActionArea>
                </Card></div>
            </div>
        )
    }
}

export default Writing;