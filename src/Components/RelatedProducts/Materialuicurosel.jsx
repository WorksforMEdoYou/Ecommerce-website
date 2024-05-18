import React from 'react'
import Carousel from 'react-material-ui-carousel'
import data_product from "../Asserts/data";
import Item from '../Item/Item';
<script src="https://cdn.tailwindcss.com"></script>
const Materialuicurosel = () => {

  return (
    <div className='p-4 '>
      <div>
      <h1 className='text-center font-bold text-white m-4'>Our Related Products</h1>
      <hr size="3" className='mb-10'/>
      <Carousel className='w-full'>
        {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })} 
      </Carousel>
    </div>
    </div>
    
  )
}

export default Materialuicurosel
