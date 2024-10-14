import React, { useState } from "react";
import ModelFilter from "./ModelFilter";
import "../styles/carList.css";

const CarList = ({ brandName, filter, models, modelName, loading, error, setModelName, handleCarClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;

  const totalPages = Math.ceil(models.length / reviewsPerPage);
  const indexOfLastModels = currentPage * reviewsPerPage;
  const indexOfFirstModels = indexOfLastModels - reviewsPerPage;
  const currentModels = models.slice(indexOfFirstModels, indexOfLastModels);

  return (
    <div className="carList">
      <div className="carList-container">
        <div className="carList-show">
          <div className="carList-filter-wrapper">
            <div className={Boolean(brandName) ? "carList-filter-open" : "carList-filter"}>
              <p>Results for <span>"{brandName}"</span>.</p>
            </div>
            <div className={filter.length ? "carList-filter-open" : "carList-filter"}>
              <p>Filtered based on <span>"{filter}"</span> segment.</p>
            </div>
          </div>
          {!loading && !Boolean(error.message) && (
            <ModelFilter models={models} modelName={modelName} setModelName={setModelName} />
          )}
          <div className="carList-car-list">
            {loading ? (
              <div className="loading">Loading...</div>
            ) : Boolean(error.message) ? (
              <div className="error">{error.message}</div>
            ) : currentModels.length === 0 ? (
              <div className="no-models">No models found.</div>
            ) : (
              currentModels.map((model) => (
                <button 
                  key={model.id} 
                  type="button" 
                  className="carList-car" 
                  onClick={() => handleCarClick(model)} 
                >
                  <div>
                    <div className="carList-car-image">
                      <img src="/images/carDummy.jpg" alt="" width={"100%"} />
                    </div>
                    <p className="carList-car-name">{model.Model_Name}</p>
                    <p className="carList-car-ratings">{model.Average_Rating}&#11088;</p>
                  </div>
                </button>
              ))
            )}
          </div>
          <div className="pagination">
            <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
              Previous
            </button>
            <span className="pagination-info"> Page {currentPage} of {totalPages} </span>
            <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
