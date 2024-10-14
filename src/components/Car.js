import React from "react";
import "../styles/car.css";

const Car = ({ handleScrollClick, modelDetail }) => {
  return (
    <div className="car">
      <div className="car-container">
        <div className="car-name">
          <h3>{modelDetail.Model_Name}</h3>
        </div>
        <div className="carLogo">
          <img src="images/car.jpg" alt="Logo" />
        </div>
        <div className="car-details-wrapper">
          <div className="car-content">
            <p className="mileage">Average Rating: {modelDetail.Average_Rating}</p>
            <p className="price">Price: {modelDetail.Price}</p>
          </div>
          <button onClick={handleScrollClick}>SEE REVIEW</button>
        </div>
      </div>
    </div>
  );
};

export default Car;
