import React from "react";
import Car from "./Car";
import CarList from "./CarList";

const CarInfoPanel = ({ brandName, filter,modelName,models,modelDetail, loading,handleScrollClick,error,setModelDetail,setModelName}) => {
  return (
    <div className="carInfoPanel">
      <Car handleScrollClick={handleScrollClick} modelDetail={modelDetail}></Car>
      <CarList brandName={brandName} modelName={modelName}  filter={filter} models={models} loading={loading} error={error} setModelDetail={setModelDetail} setModelName={setModelName}></CarList>
    </div>
  );
};

export default CarInfoPanel;
