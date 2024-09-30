import React, { useState } from "react";
import NavBar from './../components/NavBar';
import CarInfoPanel from "../components/CarInfoPanel";
import Reviews from "../components/Reviews";


function Home() {
  const [brandName,setBrandName] = useState("");
  const [filter, setFilter] = useState("");
  const [timeId, setTimeId] = useState("");

  const debounce = function (func, delay) {
    clearTimeout(timeId);
    let id = setTimeout(func, delay);
    setTimeId(id);
  };

  return (
    <div className="home">
      <NavBar setBrandName={setBrandName} setFilter={setFilter} debounce={debounce}></NavBar>
      <CarInfoPanel brandName={brandName} filter={filter}></CarInfoPanel>
      <Reviews></Reviews>
    </div>
  );
}

export default Home;
