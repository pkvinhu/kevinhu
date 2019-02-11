import React, { Component } from 'react';
import '../App.css';
import { Paper } from '@material-ui/core';
import sizeMe from 'react-sizeme';
import DrawerList from './DrawerList';

class Nav extends Component {
    state={
        toggle: false
    }

    handleClick = () => {
        this.setState({ toggle: !this.state.toggle })
        console.log(this.state.toggle)
    }

    render() {
        const { handleClick } = this;
        const { width } = this.props.size;
        console.log(width)
        return (
            <Paper className='App navbar' style={width < 768 ? {justifyContent: "flex-end"} : {}}>
                {width >= 768 ? (
                    <div className="">
                        <a className='scroll-link navbar-brand item' href='#header'>HOME</a>
                        <a className='scroll-link navbar-brand item' href='#tech'>TECH</a>
                        <a className='scroll-link navbar-brand item' href='#projects'>PROJECTS</a>
                        <a className='scroll-link navbar-brand item' href='#writing'>WRITING</a>
                        <a className='scroll-link navbar-brand item' href='#about'>ABOUT ME</a>
                        {/* <a className='scroll-link navbar-brand item' href='#education'>EDUCATION</a> */}
                        <a className='navbar-brand item' target="_blank" href="Software_Engineer_CV_v3.pdf">RESUME</a>
                    </div>
                ) : (
                    <div >
                        <DrawerList />
                    </div>
                )}
            </Paper>
        )
    }
}

export default sizeMe()(Nav);