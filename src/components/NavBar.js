import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { GrClosedCaption, GrSearch } from "react-icons/gr";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <p className="logo">CarCritique <GrClosedCaption /></p>
        <div className="nav-search">
          <GrSearch></GrSearch>
          <input type="text" placeholder="Search for brands...." />
        </div>
        <div className="nav-pages">
          <Link to="/Home">Home <span></span></Link>
          <Link to="/">Log out<span></span></Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
