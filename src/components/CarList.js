import React, { useState } from "react";
import cars from "../dummy_data/data";
import "../styles/carList.css";

const CarList = ({ brandName, filter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(cars.length / carsPerPage);

  // Get current cars
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  return (
    <div className="carList">
      <div className="carList-container">
        <div className="carList-show">
          <div className="carList-filter-wrapper">
            <div className={Boolean(brandName) ? "carList-filter-open" : "carList-filter"}>
              <p>
                Results for <span>"{brandName}"</span>.
              </p>
            </div>
            <div className={Boolean(filter) ? "carList-filter-open" : "carList-filter"}>
              <p>
                Filtered based on <span>"{filter}"</span> segment.
              </p>
            </div>
          </div>
          <div className="carList-car-list">
            {currentCars.map((car) => {
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
          <div className="pagination">
            <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
              Previous
            </button>
            <span className="pagination-info">
              {" "}
              Page {currentPage} of {totalPages}{" "}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
