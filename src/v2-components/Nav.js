import React, { Component } from "react";
import "../index.css";

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="name2">Hi, my name is Kevin.</div>
        <div className="nav">
          <a className="navbar-item">About</a>
          <a className="navbar-item">Projects</a>
          <a className="navbar-item">Writing</a>
          <a className="navbar-item">Reading</a>
          <a className="navbar-item">Blog</a>
          <a
            className="navbar-item"
            target="_blank"
            href="Software_Engineer_CV.pdf"
          >
            Resume
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
