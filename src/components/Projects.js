import React, { Component } from 'react';
import '../App.css';
// import { GridList, GridListTile, GridListTileBar, Icon } from '@material-ui/core';

const projects = [{
                   name: "Rosetta Capstone",
                   image: require("../assets/RSCapstone.png"),
                   github: "https://github.com/RosettaCapstoned/main_app",
                   website: "https://rosetta-capstone.herokuapp.com/"
                  }, {
                    name: "LitReviews Digest",
                    image: require("../assets/LitReviews.png"),
                    github: "https://github.com/pkvinhu/lit-reviews-digest",
                    website: "https://www.fullstackacademy.com/hackathon-presentations/litreviews-digest"
                   }, {
                    name: "ManPetals E-Commerce",
                    image: require("../assets/ManPetals.png"),
                    github: "https://github.com/DisruptionCorp/man-petals-store",
                    website: "https://man-petals.herokuapp.com/#/"
                   }, {
                    name: "Tula App",
                    image: require("../assets/Tula.png"),
                   }, {
                    name: "Dig Inn Projections Tool",
                    image: require("../assets/DigInnProjection.png"),
                   },
                ]

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
            <div className="container">
                <div className="row">
                {projects.slice(0, 3).map(each => {
                    return (
                        <div className="col s4">
                        <div className="card projectTile">
                            <div className="card-image">
                                <img alt='' src={each.image}/>
                            </div>
                            <div className="overlay">
                                <div className="overlay-icons">
                                <a target="_blank" rel="noopener noreferrer" href={each.github}>
                                    <i class="material-icons">code</i>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href={each.website}>
                                    <i class="material-icons">open_in_new</i>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
                </div>
                <div className="row">
                    {projects.slice(3).map(each => {
                        return (
                            <div className="col s4">
                                <div className="card projectTile">
                                    <div className="card-image">
                                        <img alt="" src={each.image}/>
                                    </div>
                                    <div className="overlay">
                                    </div>
                                </div>
                            </div>
                    )})}
                    <div className="col s4"></div>
                </div>
                </div>
            </div>
        )
    }
}

export default Projects;