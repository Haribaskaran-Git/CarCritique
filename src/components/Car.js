import React from "react";
import "../styles/car.css";
import { Link } from "react-router-dom";
const Car = () => {
  return (
    <div className="car">
      <div className="car-container">
        <div className="car-name">
          <h3>RENAULT</h3>
        </div>
        <div className="carLogo">
          <img src="images/car.jpg" alt="Logo" />
        </div>
        <div className="car-details-wrapper">
          <div className="car-content">
            <p className="model">2024 Renault Kwid</p>
            <p className="mileage">Mileage: 15 km/l</p>
            <p className="price">₹5,64,701 - ₹9,64,701</p>
          </div>
          <Link to="/Reviews">
            <button>SEE REVIEW</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Car;
