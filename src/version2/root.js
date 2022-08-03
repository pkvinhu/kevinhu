import React from "react";
import { Route, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Writing from "./components/Writing";

const Version2Root = () => {
  return (
    <div className="container">
      <Nav />
      <Route exact path="/">
        <Redirect to="/about" />
      </Route>
      <Route path="/about" component={About} />
      <Route path="/writing" component={Writing} />
    </div>
  );
};

export default Version2Root;
