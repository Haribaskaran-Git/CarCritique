import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { GrClosedCaption, GrFormFilter, GrSearch } from "react-icons/gr";

const NavBar = ({ setBrandName, debounce,setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  const handleFilter = (e) => { 
    setFilter(e.target.value);
  }

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
              placeholder="Search for brands, models...."
              onChange={(e) => debounce(() => setBrandName(e.target.value), 1000)}
            />
          </div>
          <div className="car-filter">
            <GrFormFilter size={"30px"}  onClick={toggleFilter} />
            <div id="car-filter-dropdown" className={isOpen ? "open" : ""}>
              <form className="filter-form" method="GET">
                <div className="radio-group">
                  <input type="radio" id="economy" name="segment" value="Economy" onChange={handleFilter} />
                  <label htmlFor="economy">Economy</label>
                </div>
                <div className="radio-group">
                  <input type="radio" id="midRange" name="segment" value="Mid-Range"  onChange={handleFilter}/>
                  <label htmlFor="midRange">Mid-range</label>
                </div>
                <div className="radio-group">
                  <input type="radio" id="premium" name="segment" value="Premium"  onChange={handleFilter}/>
                  <label htmlFor="premium">Premium</label>
                </div>
                <div className="radio-group">
                  <input type="radio" id="luxury" name="segment" value="Luxury" onChange={handleFilter} />
                  <label htmlFor="luxury">Luxury</label>
                </div>
                <div className="radio-group">
                  <input type="radio" id="posh" name="segment" value="Posh" onChange={handleFilter} />
                  <label htmlFor="posh">Posh</label>
                </div>
              </form>
            </div>
          </div>
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
