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
    }

    // componentDidMount(){
    //     var navbar = document.getElementById("navbar");
    //     var sticky = navbar.offsetTop;
    //     window.onscroll = function() {
    //         if (window.pageYOffset >= sticky) {
    //             navbar.classList.add("sticky")
    //           } else {
    //             navbar.classList.remove("sticky");
    //         }
    //     };
    // }
    // componentDidUpdate(prevProps){
    //     if(prevProps.size.width !== this.props.size.width){
    //         this.props.size.width = this.props.size.width
    //     }
    // }

    render() {
        const { handleClick } = this;
        const { width } = this.props.size;
        console.log(width)
        return width >= 768 ? (
            <div className='App navbar' id="navbar">
                <div>
                    <a className='scroll-link navbar-brand item' href='#header'>HOME</a>
                    <a className='scroll-link navbar-brand item' href='#projects'>PROJECTS</a>
                    <a className='scroll-link navbar-brand item' href='#tech'>TECH</a>
                    <a className='scroll-link navbar-brand item' href='#writing'>WRITING</a>
                    <a className='scroll-link navbar-brand item' href='#about'>ABOUT ME</a>
                    {/* <a className='scroll-link navbar-brand item' href='#education'>EDUCATION</a> */}
                    <a className='navbar-brand item' target="_blank" href="Software_Engineer_CV.pdf">RESUME</a>
                </div>
            </div>
        ) : 
        (
            <div className='App navbar' style={{justifyContent: "flex-end"}} id="navbar">
                <DrawerList />
            </div>
        )
    }
}

export default sizeMe()(Nav);