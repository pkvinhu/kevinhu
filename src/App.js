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

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Home />
          <About />
          <Technologies />
          <Projects />
          <Writing />
          <Education />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
