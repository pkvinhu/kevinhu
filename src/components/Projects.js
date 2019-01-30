import React, { Component } from 'react';
import '../App.css';
import { GridList, GridListTile } from '@material-ui/core';

class Projects extends Component {
    render() {

        return (
                <GridList 
                        className="grid section"
                        id="projects"
                        cols={3}>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    cellHeight={250}
                                    >
                                    <a target="_blank" rel="noopener noreferrer" href="https://rosetta-capstone.herokuapp.com/">
                                        <img alt="" src={require("../RSCapstone.png")}/>
                                    </a>
                                </GridListTile>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    >
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.fullstackacademy.com/hackathon-presentations/litreviews-digest">
                                        <img alt="" src={require("../LitReviews.png")}/>
                                    </a>
                                </GridListTile>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    >
                                    <a target="_blank" rel="noopener noreferrer" href="https://man-petals.herokuapp.com/#/">
                                        <img alt="" src={require("../ManPetals.png")}/>
                                    </a>
                                </GridListTile>
                                <h2>Rosetta Capstone</h2>
                                <h2>LitReviews Digest</h2>
                                <h2>ManPetals E-Commerce</h2>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    >
                                    <img alt="" src={require("../Tula.png")} />
                                </GridListTile>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    >
                                    <img alt="" src={require("../DigInnProjection.png")} />
                                </GridListTile>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    >
                                </GridListTile>
                                <h2>Tula App</h2>
                                <h2>DigInn Projection Tool</h2>
                                <h2></h2>
                    </GridList>
        )
    }
}

export default Projects;