import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import Version1Root from "./version1/root";
import Version2Root from "./version2/root";

class App extends Component {
  render() {
    
    return (
      <Router>
        {process.env.VERSION === 2 ? (
          <Version2Root />
        ) : (
          <Version1Root />
        )}
      </Router>
    );
  }
}

export default App;
