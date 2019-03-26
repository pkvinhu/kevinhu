import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Technologies from './components/Technologies';
import Parallax from './components/Parallax';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          <Projects />
          <Parallax bg="first" tag="Tech"/>
          <Technologies />
          <Parallax bg="second" tag="Writing"/>
          <Writing />
          <Parallax bg="first" tag="About Me"/>
          <About />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
