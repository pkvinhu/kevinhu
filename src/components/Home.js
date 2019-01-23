import React, { Component } from 'react';
import '../App.css';
import { Button, Icon, Paper, GridList } from '@material-ui/core';


class Home extends Component {
    state = {
        transform: false,
        strengths: false,
        tech: false,
        passions: false
    }

    handleClick = (evt) => {
        this.setState({ [evt.target.name]: true })
    }

    render() {
        const { transform, strengths, tech, passions } = this.state;
        const { handleClick } = this;
        return (
            <div className='home' id='home'>
                    <GridList className="gridContainer" cellHeight={130} cols={1}>
                        {strengths && <Paper className="tile">Strengths</Paper>}
                        {tech && <Paper className="tile">Tech</Paper>}
                        {passions && <Paper className="tile">Passions</Paper>}
                    </GridList>
                    <div className="bio">
                    {transform && 
                        (<div className="insideQualities">
                            <Button name="strengths" onClick={handleClick}>Strengths</Button>
                            <Button name="tech" onClick={handleClick}>Technologies</Button>
                            <Button name="passions" onClick={handleClick}>Passions</Button>
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