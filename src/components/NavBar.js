import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { GrClosedCaption, GrSearch } from "react-icons/gr";
import CarFilter from "./CarFilter.js";

const NavBar = ({ setBrandName, debounce, setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <p className="logo">
          CarCritique <GrClosedCaption />
        </p>
        <div className="nav-search">
          <div className="nav-search-bar">
            <GrSearch></GrSearch>
            <input
              type="text"
              placeholder="Search for brands..."
              onChange={(e) => debounce(() => setBrandName(e.target.value), 1000)}
            />
          </div>
          <CarFilter
            toggleFilter={toggleFilter}
            setFilter={setFilter}
            setBrandName={setBrandName}
            isOpen={isOpen}
          ></CarFilter>
        </div>
        <div className="nav-pages">
          <Link to="/Home">
            Home <span></span>
          </Link>
          <Link to="/">
            Log out<span></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
