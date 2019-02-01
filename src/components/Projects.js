import React, { Component } from 'react';
import '../App.css';
import { GridList, GridListTile, GridListTileBar, IconButton, Icon } from '@material-ui/core';

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
                                        <img alt="" src={require("../assets/RSCapstone.png")}/>
                                    </a>
                                    <GridListTileBar 
                                        title="Rosetta Capstone"
                                        actionIcon={
                                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/RosettaCapstoned/main_app">
                                              <Icon>chevron_left</Icon><Icon>chevron_right</Icon>
                                            </a>
                                          }/>
                                </GridListTile>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    cellHeight={280}
                                    >
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.fullstackacademy.com/hackathon-presentations/litreviews-digest">
                                        <img alt="" src={require("../assets/LitReviews.png")}/>
                                    </a>
                                    <GridListTileBar 
                                        title="LitReviews Digest"
                                        actionIcon={
                                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/pkvinhu/lit-reviews-digest">
                                                <Icon>chevron_left</Icon><Icon>chevron_right</Icon>                                            
                                            </a>
                                          }/>
                                </GridListTile>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    cellHeight={280}
                                    >
                                    <a target="_blank" rel="noopener noreferrer" href="https://man-petals.herokuapp.com/#/">
                                        <img alt="" src={require("../assets/ManPetals.png")}/>
                                    </a>
                                    <GridListTileBar 
                                        title="ManPetals E-Commerce"
                                        actionIcon={
                                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/DisruptionCorp/man-petals-store">
                                              <Icon>chevron_left</Icon><Icon>chevron_right</Icon>
                                            </a>
                                          }/>
                                </GridListTile>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    cellHeight={280}
                                    >
                                    <img alt="" src={require("../assets/Tula.png")} />
                                    <GridListTileBar title="Tula App"/>
                                </GridListTile>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    >
                                    <img alt="" src={require("../assets/DigInnProjection.png")} />
                                    <GridListTileBar title="DigInn Projection Tool"/>
                                </GridListTile>
                                <GridListTile 
                                    className="projectTile"
                                    cols={1}
                                    >
                                </GridListTile>
                    </GridList>
            </div>
        )
    }
}

export default Projects;