import React, { Component } from 'react';
import '../App.css';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

class Projects extends Component {
    state = {
        bg: false
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({ bg: !this.state.bg})
        }, 10000)
    }
    render() {
        const { bg } = this.state;
        return (
            <div className={!bg ? 'projects section aboutBG1' : 'projects section aboutBG2'} id='projects'>
                <GridList 
                        className="grid section"
                        cols={3}>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    cellHeight={280}
                                    >
                                    <a target="_blank" rel="noopener noreferrer" href="https://rosetta-capstone.herokuapp.com/">
                                        <img alt="" src={require("../RSCapstone.png")}/>
                                    </a>
                                    <GridListTileBar title="Rosetta Capstone"/>
                                </GridListTile>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    cellHeight={280}
                                    >
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.fullstackacademy.com/hackathon-presentations/litreviews-digest">
                                        <img alt="" src={require("../LitReviews.png")}/>
                                    </a>
                                    <GridListTileBar title="LitReviews Digest"/>
                                </GridListTile>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    cellHeight={280}
                                    >
                                    <a target="_blank" rel="noopener noreferrer" href="https://man-petals.herokuapp.com/#/">
                                        <img alt="" src={require("../ManPetals.png")}/>
                                    </a>
                                    <GridListTileBar title="ManPetals E-Commerce"/>
                                </GridListTile>
                                {/*<h2>Rosetta Capstone</h2>
                                <h2>LitReviews Digest</h2>
                                <h2>ManPetals E-Commerce</h2>*/}
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    cellHeight={280}
                                    >
                                    <img alt="" src={require("../Tula.png")} />
                                    <GridListTileBar title="Tula App"/>
                                </GridListTile>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    >
                                    <img alt="" src={require("../DigInnProjection.png")} />
                                    <GridListTileBar title="DigInn Projection Tool"/>
                                </GridListTile>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    >
                                </GridListTile>
                                {/*<h2>Tula App</h2>
                                <h2>DigInn Projection Tool</h2>
                                <h2></h2>*/}
                    </GridList>
            </div>
        )
    }
}

export default Projects;