import React from 'react'
import data_product from '../Asserts/data';
import Item from '../Item/Item';
import Materialuicurosel from './Materialuicurosel';
<script src="https://cdn.tailwindcss.com"></script>
const RelatedProducts = () => {
  return (
    <div className='related-products flex flex-col align-center gap-2'>
      <h1 className='font-bold font-semibold text-center text-orange-600 mb-2'>Related Products</h1>
      <hr className='bg-orange-600'/>
      <div className="raltedproductitem mt-5 flex gap-3 ">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
      </div>
      <div className='mt-3 w-full bg-orange-500 '>
            <Materialuicurosel/>
      </div>
    </div>
  )
}

export default RelatedProducts
