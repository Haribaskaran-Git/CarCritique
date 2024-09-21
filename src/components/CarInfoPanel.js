import React from 'react'
import Car from './Car'
import CarList from './CarList'

const CarInfoPanel = () => {
  return (
    <div className='carInfoPanel'>
        <Car></Car>
        <CarList></CarList>
    </div>
  )
}

export default CarInfoPanel