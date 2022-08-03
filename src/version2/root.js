import React from "react";
import { Route, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Writing from "./components/Writing";

const Version2Root = () => {
  return (
    <div className="container">
      <Nav />
      <Route path="/about" component={About} />
      <Route path="/writing" component={Writing} />
      <Route exact path="/" render={() => <Redirect to="/about" />} />
      <Route path="*" render={() => <Redirect to="/about" />} />
    </div>
  );
};

export default Version2Root;
