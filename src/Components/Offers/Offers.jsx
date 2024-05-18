import React from 'react'
import './offers.css'
import exclusive_image from '../Asserts/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>
            Exciting offers 
        </h1>
        <h1>
            Live Now
        </h1>
        <p>only on best sellers package, have more Exciting offers.</p>
        <button>Shop now ➜</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt=""/>
      </div>
    </div>
  )
}

export default Offers
