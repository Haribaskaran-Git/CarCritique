import React from "react";
import NavBar from './../components/NavBar';
import CarInfoPanel from "../components/CarInfoPanel";
import Reviews from "../components/Reviews";


function Home() {
  return (
    <div className="home">
      <NavBar></NavBar>
      <CarInfoPanel></CarInfoPanel>
      <Reviews></Reviews>
    </div>
  );
}

export default Home;
