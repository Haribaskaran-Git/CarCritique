import React from "react";
import Car from "./Car";
import CarList from "./CarList";

const CarInfoPanel = ({ brandName, filter, handleClick, loading, models,error,modelDetail,setModelDetail}) => {
  return (
    <div className="carInfoPanel">
      <Car handleClick={handleClick} modelDetail={modelDetail}></Car>
      <CarList brandName={brandName}  filter={filter} models={models} loading={loading} error={error} setModelDetail={setModelDetail}></CarList>
    </div>
  );
};

export default CarInfoPanel;
