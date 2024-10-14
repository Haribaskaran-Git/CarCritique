import React from "react";
import Car from "./Car";
import CarList from "./CarList";

const CarInfoPanel = ({ brandName, filter, modelName, models, modelDetail, loading, handleScrollClick, error, setModelName ,handleCarClick }) => {
  return (
    <div className="carInfoPanel">
      <Car handleScrollClick={handleScrollClick} modelDetail={modelDetail} />
      <CarList brandName={brandName} modelName={modelName} filter={filter} models={models} loading={loading} error={error}  setModelName={setModelName} handleCarClick={handleCarClick} />
    </div>
  );
};

export default CarInfoPanel;
