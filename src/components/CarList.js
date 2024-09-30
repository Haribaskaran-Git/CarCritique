import React from "react";
import cars from "../dummy_data/data";
import "../styles/carList.css";

const CarList = ({ brandName, filter }) => {
  return (
    <div className="carList">
      <div className="carList-container">
        <div className="carList-show">
          <div className={brandName ? "carList-filter-open" : "carList-filter"}>
            <p>
              Results for <span>"{brandName}"</span>.
            </p>
          </div>
          <div className={filter ? "carList-filter-open" : "carList-filter"}>
            <p>
              Filtered based on <span>"{filter}"</span> segment.
            </p>
          </div>
          {cars.map((car) => {
            return (
              <div className="carList-car" key={car.id}>
                <div className="carList-car-image">
                  <img src={car.car_image} alt="" width={"100%"} />
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
