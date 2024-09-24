
import React, { useState } from 'react';
import "../styles/car.css";
const Car = () => {
  const [isOpen, setIsOpen] = useState(false);
  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='car'>
      <div className='car-container'>
        <h1 className='car-name'>RENAULT</h1>
        {/* <div className="color-dropdown">
            <div className="circle" onClick={toggleDropdown}>
              <span className="arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
              <ul className="color-list">
                {colors.map((color, index) => (
                  <li key={index} style={{ backgroundColor: color.toLowerCase() }}>
                    {color}
                  </li>
                ))}
              </ul>
            )}
          </div> */}
        <img className='carLogo' src="images/car.jpg" alt="Logo" />
        {/* <h1 className='car-price'>{formattedPrice}</h1> */}
        <div class="grid-content">
                <h3>2024 Renault Kwid</h3>
                <span className="mileage">Mileage: 15 km/l</span>
                <h2>₹5,64,701 - ₹9,64,701</h2>
                <a href="Product.html"><button>SEE REVIEW</button></a>
        </div>
        

      </div>
    </div>
  );
}

export default Car;
