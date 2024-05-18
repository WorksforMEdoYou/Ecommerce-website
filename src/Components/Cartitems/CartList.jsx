import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
<script src="https://cdn.tailwindcss.com"></script>
const CartList = () => {
    const {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
  return (
    <div>
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return(
<div>
    <div>
        <div className='flex text-center justify-center align-center gap-3 mt-2 mb-4'>
            <img src={e.image} alt="" height="200px" width="200px"/>
            <div className='flex flex-col text-bold'>
            <p className='block font-bold '>{e.name}</p>
            <p>Per item ${e.new_price}</p>
            <p className='text-3xl color-orange-600'>Total: ${e.new_price * cartItems[e.id]}</p>
            <div className='flex bg-orange-300 border-rounded-3xl p-2 font-bold space-x-60 text-2xl'>
                <button onClick={()=>{removeFromCart(e.id)}}>-</button>
                <button>{cartItems[e.id]}</button>
                <button onClick={()=>{addToCart(e.id)}}>+</button>
            </div>
            </div>
        </div>
        <hr />
    </div>
</div>
    )
        }
    else{
        return(
           null
        );
    }
      })}

      <div className='flex justify-center align-center flex-col text-center'>
        <div>
            <h1 className='font-3xl'>Cart Total,</h1>
        </div>
        <div className='flex gap-3 text-center align-center justify-center'>
            <p className='text-3xl font-bold'>subtotal</p>
            <p className='text-4xl font-bold text-orange-600'>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div>
            <p>Shipping Fee</p>
            <p>Free</p>
        </div>
        <hr />
        <div>
            <h3 className='text-4xl font-bold text-orange-600'>Total</h3>
            <h3 className='text-4xl font-bold text-orange-600'>${getTotalCartAmount()}</h3>
            <button className='bg-orange-600 font-bold text-3xl text-black p-3 w-fit h-fit border-rounded-3xl active:translate-y-1'>Proceed To Checkout</button>
        </div>
        
        <div className='bg-green-600 mt-2 mb-2 p-5'>
            <p className='text-2xl'>If you have our promocode, Enter it Here</p>
            <div className='flex gap-2 justify-center align-center border-none hover:bg-green-600'>
                <div className='bg-green-200'>
                <input type="text" placeholder='Enter Promocode' className='bg-green-200 h-3 p-3 border-none' />
                <button className='bg-green-400 h-full'>Submit</button>
                </div>
            </div>
        </div>
      </div>
</div>
  )
}

export default CartList
