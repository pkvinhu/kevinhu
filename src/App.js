import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Technologies from './components/Technologies';
import Parallax from './components/Parallax';
import Header from './components/Header';
// import FeatureTraits from './components/FeatureTraits';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          {/* <Home /> */}
          {/* <Parallax bg="first"/> */}
          {/* <FeatureTraits /> */}
          <Projects />
          <Parallax bg="first" tag="Tech"/>
          <Technologies />
          <Parallax bg="second" tag="Writing"/>
          <Writing />
          <Parallax bg="first" tag="About Me"/>
          <About />
          {/* <Parallax bg="second" tag="Education"/>
          <Education /> */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
