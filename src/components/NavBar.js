import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { GrSearch } from "react-icons/gr";



const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="nav-container">
        <div className="nav-search">
          <GrSearch></GrSearch>
          <input type="text" placeholder='Search for brands, models....' />
        </div>
        <div className="nav-pages">
          <Link to="/Home">Home</Link>
          <Link to="/">Log out</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar