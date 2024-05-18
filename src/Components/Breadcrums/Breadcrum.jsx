import React from 'react'
import arrow_icon from '../Asserts/breadcrum_arrow.png';
<script src="https://cdn.tailwindcss.com"></script>
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='flex gap-1 mt-1 text-brown-500 font-bold'>
      Home <img src={arrow_icon} alt="" />Shop <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrum
