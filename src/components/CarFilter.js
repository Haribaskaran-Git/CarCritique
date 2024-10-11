import { useState } from "react";
import { GrFormFilter } from "react-icons/gr";

const CarFilter = ({ toggleFilter, setFilter, setBrandName, isOpen }) => {
  const [carBrand] = useState([
    "All brands",
    "Aston martin",
    "Audi",
    "Bajaj",
    "Bentley",
    "Bmw",
    "Byd",
    "Citroen",
    "Ferrari",
    "Force",
    "Honda",
    "Hyundai",
    "Isuzu",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lamborghini",
    "Lexus",
    "Mahindra",
    "Maserati",
    "Mclaren",
    "Mercedes-Benz",
    "Mini-Cooper",
    "Nissan",
    "PMV",
    "Porsche",
    "Pravaig",
    "Renault",
    "Rolls-Royce",
    "Skoda",
    "Strom-Motors",
    "Tata",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ]);
  const [segments] = useState(["All segments", "Economy", "Midrange", "Luxury", "Premiumcars", "Poshcars"]);
  return (
    <div className="car-filter">
      <GrFormFilter size={"30px"} onClick={toggleFilter} />
      <div id="car-filter-dropdown" className={isOpen ? "open" : ""}>
        <form className="filter-form" method="GET">
        {isOpen&&<div className="filter-form-brand">
            <p>Brand</p>
            <div className="brand-radio-group">
              {carBrand.map((car) => {
                return (
                  <div className="radio-group" key={car}>
                    <input
                      type="radio"
                      id={car}
                      name="car"
                      value={car}
                      onChange={() => {
                        car === "All brands" ? setBrandName("") : setBrandName(car);
                      }}
                    />
                    <label htmlFor={car} style={car === "All brands" ? { textDecoration: "underline" } : {}}>
                      {car}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>}
          {isOpen&&<div className="filter-form-segment">
            <p>Segment</p>
            <div className="segment-radio-group">
              {segments.map((segment) => {
                return (
                  <div className="radio-group" key={segment}>
                    <input
                      type="radio"
                      id={segment}
                      name="segment"
                      value={segment}
                      onChange={() => {
                        segment === "All segments" ? setFilter("") : setFilter(segment);
                      }}
                    />
                    <label htmlFor={segment} style={segment === "All segments" ? { textDecoration: "underline" } : {}}>
                      {segment}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>}
        </form>
      </div>
    </div>
  );
};

export default CarFilter;
