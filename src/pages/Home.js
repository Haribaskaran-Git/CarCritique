import React, { useRef, useState } from "react";
import NavBar from "./../components/NavBar";
import CarInfoPanel from "../components/CarInfoPanel";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

function Home() {
  const [brandName, setBrandName] = useState("");
  const [filter, setFilter] = useState("");
  const [timeId, setTimeId] = useState("");
  const titleRef = useRef(null);

  function handleClick() {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const debounce = function (func, delay) {
    clearTimeout(timeId);
    let id = setTimeout(func, delay);
    setTimeId(id);
  };

  return (
    <div className="home">
      <NavBar setBrandName={setBrandName} setFilter={setFilter} debounce={debounce}></NavBar>
      <CarInfoPanel brandName={brandName} filter={filter} handleClick={handleClick}></CarInfoPanel>
      <Reviews title={titleRef}></Reviews>
      <Footer></Footer>
    </div>
  );
}

export default Home;
