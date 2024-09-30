import React from "react";
import cars from "../dummy_data/data";
import { GrFormFilter, GrSearch } from "react-icons/gr";
import "../styles/carList.css";

const CarList = () => {
  return (
    <div className="carList">
      <div className="carList-container">
        <div className="carList-title">
          <p>List of cars for "Brand Name"</p>
        </div>
        <div className="carList-filter">
          <div className="carList-search">
            <GrSearch></GrSearch>
            <input type="text" placeholder="Search for car model name...." />
          </div>
          <div className="car-price-filter">
            <GrFormFilter size={"30px"} />
          </div>
        </div>
        <div className="carList-show">
          {cars.map((car) => {
            return (
              <div className="carList-car" key={car.id}>
                <div className="carList-car-image">
                  <img src={car.car_image} alt="" width={"150px"} srcset="" />
                </div>
                <p className="carList-car-name">{car.car_name}</p>
                <p className="carList-car-ratings">{car.ratings}&#11088;</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarList;
