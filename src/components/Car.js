import React from 'react';

const Car = () => {
  const carPrice = 1000000; 
  const formattedPrice = `₹${carPrice.toLocaleString()}`;

  return (
    <div className='car'>
      <div className='car-container'>
        <h1 className='car-name'>RENAULT</h1>
        
        <h1 className='car-price'>{formattedPrice}</h1>
        
        <img className='carLogo' src="images/car.jpg" alt="Logo" />
      </div>
    </div>
  );
}

export default Car;
