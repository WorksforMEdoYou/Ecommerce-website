import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import drop from '../Components/Asserts/dropdown_icon.png'
import Item from '../Components/Item/Item';
import Footer from '../Components/Footer/Footer';
<script src="https://cdn.tailwindcss.com"></script>
const Shopcategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div>
      <img src={props.banner} alt="" />
      <div className='font-bold  font-m text-black-700/50 mt-2 p-2 flex align-center justify-center flex-col'>
        <p className='text-center'>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className='flex align-center justify-center ml-2 gap-2'>
          Sort by <img src={drop} alt="" className='h-3 w-3 mt-1.5'/>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-2 mt-3 md:grid-cols-3 xl:grid-cols-3 p-3'>
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className='flex flex-warp align-center justify-center '>
        <p className='bg-orange-600 font-bold text-black rounded-3xl p-4 mt-3'>explore more</p>
      </div>
      <div className='mt-1'>
      <Footer/>
      </div>
    </div>
  )
}

export default Shopcategory
