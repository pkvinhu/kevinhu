import React, { Component } from 'react';
import '../App.css';
// import { GridList, GridListTile, GridListTileBar, Icon } from '@material-ui/core';

const projects = [{
                   name: "Rosetta Capstone",
                   image: require("../assets/RSCapstone.png"),
                   github: "https://github.com/RosettaCapstoned/main_app",
                   website: "https://rosetta-capstone.herokuapp.com/",
                   description: "Rosetta Capstone is a web platform intending to solve the problem of inconvenience and inaccessibility of ESL services for immigrants. How could we build a platform that could serve immigrants from multiple language backgrounds in the same room without the headache of having to search for a physical program within the learner's vicinity? The RCS platform offers student users a realtime interactive learning classroom where they can dynamically select the translation language of choice. The live lecture will then be spoken in english but translated to each student per selected language through lecture notes transcription. Students can also interact with their teacher and through a native-built chatbot."
                  }, {
                    name: "LitReviews Digest",
                    image: require("../assets/LitReviews.png"),
                    github: "https://github.com/pkvinhu/lit-reviews-digest",
                    website: "https://www.fullstackacademy.com/hackathon-presentations/litreviews-digest",
                    description: "LitReviews Digest is the product of a 4-day stackathon completed in Fullstack Academy. It is a book reviews aggregator that pulls information only from the most reputable book platforms. This includes integration to the Google Books API, the NYT Books API, the Penguin Random House Books API, and the iDreamBooks API - this last source being a webscraping application that pulls data from 10+ books reviewing platforms. The difficulty in searching for reviews is either that dependable platforms such as Goodreads are too overly community-led, but if we were to use a search engine, it is still difficult to distinguish wheat from chaff. The hope was to shorten the length of time it takes for a user to be able to find a reliable review from professionals and expert platforms by simply compiling the best by the click of a button."
                   }, {
                    name: "ManPetals E-Commerce",
                    image: require("../assets/ManPetals.png"),
                    github: "https://github.com/DisruptionCorp/man-petals-store",
                    website: "https://man-petals.herokuapp.com/#/",
                    description: "ManPetals was a simple E-commerce platform built on a NERP stack to create an intuitive and easy shopping experience within the niche demographic of men who know nothing about flowers but are tasked to purchase some. It has a natively built search engine that allows search by tags, designed with a clean material layout, and is integrated with Stripe as a payment system."
                   }, {
                    name: "Tula App",
                    image: require("../assets/Tula.png"),
                    description: "The Tula App was an internal tool that I co-engineered in collaboration with Furey Financial Services for Tula to offer easy access to their clients to both perform bulk orders and track them in every stage of the process. It conveniently allows communication across all parties during shipments so that nothing gets delayed or lost. This product orders application was built using the Google App Maker. Since it was an application built for private use, neither the source code nor the application is provided for viewing."
                   }, {
                    name: "Dig Inn Projections Tool",
                    image: require("../assets/DigInnProjection.png"),
                    description: "The Dig Inn Projection tool was another internal tool that I co-engineered during my time with Furey. It aggregated data from Dig Inn restaurants across New York City in order to calculate budgets and projections per store on a week-by-week basis. The intention was to be able to offer a small scale budgeting tool that could be reusable and that can be used for eventual analytics. This was built through Google App Maker with Google BigQuery integration. Unfortunately, the code is also private."
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
                                <p>{each.description}</p>
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
                                        <p>{each.description}</p>
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