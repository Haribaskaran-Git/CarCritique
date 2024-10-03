import React from 'react'
import Car from './Car'
import CarList from './CarList'

const CarInfoPanel = ({brandName,filter,handleClick}) => {
  return (
    <div className='carInfoPanel'>
        <Car handleClick={handleClick}></Car>
        <CarList brandName={brandName} filter={filter} ></CarList>
    </div>
  )
}

export default CarInfoPanel