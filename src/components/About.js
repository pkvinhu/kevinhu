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
            <Fragment className="about" >
            <div className={!bg ? 'about aboutBG1' : 'about aboutBG2'} id='about'>
            <img
                name=""
                className="image"
                src={require('../faphoto3.jpg')}
            />
            <Paper className='info'>
                <div>I am a Chicago native and Brooklyn transplant.</div>
            </Paper></div>
            </Fragment>
        )
    }
}

export default About;