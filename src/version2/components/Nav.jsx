import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/Version2.css";

const Nav = () => {
  const location = useLocation();
  console.log(location.pathname)
  const header = location.pathname && location.pathname.length > 1
    ? location.pathname[1].toUpperCase() + location.pathname.slice(2)
    : "";
  return (
    <div className="nav">
      <div className="leftNav">
        <div className="name">Kevin Hu / {header}</div>
        {/* <div className="page"> {header}</div> */}
      </div>
      <div className="rightNav">
        <a className="navLink" href="/#/about">
          about
        </a>
        <a className="navLink" href="/#/writing">
          writing
        </a>
        <a
          className="navLink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.thestorygraph.com/profile/kevinhu"
        >
          reading
        </a>
        <a className="navLink" target="_blank" href="Software_Engineer_CV.pdf">
          cv
        </a>
      </div>
    </div>
  );
};

export default Nav;
