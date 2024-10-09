import React from "react";
import Car from "./Car";
import CarList from "./CarList";

const CarInfoPanel = ({ brandName, filter, handleClick, loading, models,error}) => {
  return (
    <div className="carInfoPanel">
      <Car handleClick={handleClick}></Car>
      <CarList brandName={brandName} filter={filter} models={models} loading={loading} error={error}></CarList>
    </div>
  );
};

export default CarInfoPanel;
