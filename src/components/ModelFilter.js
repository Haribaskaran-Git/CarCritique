import React from "react";

const ModelFilter = ({ models,modelName, setModelName }) => {
  return (
    <div className="model-filter">
      <label htmlFor="model-select">Select Model:</label>
      <select
        id="model-select"
        onChange={(e) => (e.target.value === "All models" ? setModelName("") : setModelName(e.target.value))}
      >
        <option value={modelName ? modelName : ""}>{modelName ? modelName : "Choose any below"}</option>
        <option value="All models">All Models</option>
        {models.map((model) => (
          <option key={model.id} value={model.Model_Name}>
            {model.Model_Name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModelFilter;
