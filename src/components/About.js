import React, { Component, Fragment } from 'react';
import '../App.css';
import { Paper } from '@material-ui/core';

class About extends Component {
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
            <Fragment className='about section'>
            <div className={!bg ? 'about section aboutBG1' : 'about section aboutBG2'} id='about'>
            <img
                alt=""
                name=""
                className="image"
                src={require('../faphoto3.jpg')}
            />
            {/* <Paper className='info'> */}
                <div className='info'>I am a Chicago native transplanted to Brooklyn. 
                                      After a stint working as a Youth Pastor in New Jersey, 
                                      I moved to New York to continue exploring my passions for story-telling, connecting communities, and writing.
                                      Along the way, I guess you can say I took on the New York identity - multiple jobs, some to survive and some to nurture my passions.
                                      <br /><br />
                                      During this time, I discovered code and loved that, as a craft, it was the perfect integration between technical and creative writing.
                                      My journey in code showed me how software connects communities where otherwise connections would never exist.
                                      After playing with Javascript for some time, I decided to enroll with Fullstack Academy of Code for their flex immersive program.
                                      </div>
            {/*</Paper>*/}</div>
            </Fragment>
        )
    }
}

export default About;