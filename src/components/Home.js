import React, { Component } from 'react';
import '../App.css';
import { Button, Icon } from '@material-ui/core';


class Home extends Component {
    state = {
        transform: false,
        Strengths: false,
        Books: false,
        Passions: false
    }

    handleClick = (evt) => {
        console.log(evt.target.name, evt.target.innerHTML);
        if(evt.target.name === "transform") {
            this.setState({ transform: true })
        }
        else {
            this.setState({ [evt.target.innerHTML]: true })
        }
    }

    render() {
        const { transform, Strengths, Books, Passions } = this.state;
        const { handleClick } = this;
        return (
            <div className='home' id='home'>
                    <div className="gridContainer">
                        {Strengths && (
                            <div className="tile">
                                <h5>Strengths</h5>
                                <hr />
                            </div>)
                        }
                        {Passions && (
                            <div className="tile">
                                <h5>Passions</h5>
                                <hr />
                            </div>)
                        }
                        {Books && (
                            <div className="tile">
                                <h5>Favorite Books</h5>
                                <hr />
                            </div>)
                        }
                    </div>
                    <div className="bio">
                    {transform && 
                        (<div className="insideQualities">
                            <Button name="strengths" onClick={handleClick}>Strengths</Button>
                            <Button name="passions" onClick={handleClick}>Passions</Button>
                            <Button name="books" onClick={handleClick}>Books</Button>
                        </div>)
                    }
                    <img
                        name="transform"
                        className={transform ? "profilePic transform" : "profilePic"}
                        src={require('../kevinhu_photo.png')}
                        onClick={handleClick}
                    />
                    
                    </div>
                    <div className={transform ? "qualities transform" : "qualities"}>
                        {!transform && 
                        (<div><Icon>menu</Icon>
                        <Icon>arrow_forward_ios</Icon></div>)}
                    </div>

            </div>
        )
    }
}

export default Home;