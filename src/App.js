import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Home />
          <About />
          <Projects />
          <Education />
          <Resume />
          {/*<Route path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/education' component={Education}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/resume' component={Resume}/>*/}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
