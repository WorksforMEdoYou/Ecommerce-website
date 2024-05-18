import React, { useContext } from 'react'
import star from '../Asserts/star_icon.png';
import star_dull from '../Asserts/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
<script src="https://cdn.tailwindcss.com"></script>
const Productdisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='p-4'>
      <div className='flex align-center justify-center'>
            <div>
                <img className='productdiaplay_main mt-3' src={product.image} alt="" height="400px" width="400px"/>
            </div>

            <div className='flex'>
                <div>
                <img src={product.image} alt="" height="200px" width="200px" className='m-2'/>
                <img src={product.image} alt="" height="200px" width="200px" className='m-2'/>
                </div>
                <div>
                <img src={product.image} alt="" height="200px" width="200px" className='m-2'/>
                <img src={product.image} alt="" height="200px" width="200px" className='m-2'/>
                </div>
            </div>
      </div>

        <div className='mt-6'>
        <h1>{product.name}</h1>
            <div className='flex gap-3'>
            <div>
                <del className='text-orange-500'>${product.old_price}</del>
            </div>
            <div>
                ${product.new_price}
            </div>
            </div>
        </div>
      <div>
        <div className='flex gap-1'>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star_dull} alt="" />
            <p className='text-orange-600 ml-2'>{122}</p>
        </div>
        <div>
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur harum voluptates! Eos a aperiam, error quibusdam enim quo deleniti rerum qui doloribus pariatur porro cumque ex voluptatum officia eligendi hic expedita vitae magni possimus quisquam! Asperiores, eius hic. Repellat maiores architecto, blanditiis repudiandae ducimus totam adipisci rerum eaque laudantium?
            </p>
        </div>
            <h1 className='font-bold mb-2 text-center text-orange-700'>select Size</h1>
        <div className='flex gap-2'>
            <div className='p-2 bg-orange-400 rounded-3xl font-semibold flex-1 text-center flex-warp cursor-pointer active:scale-75 focus:outline-none focus:ring focus:ring-green-600'>Small</div>
            <div className='p-2 bg-orange-400 rounded-3xl font-semibold flex-1 text-center flex-warp cursor-pointer active:scale-75 focus:outline-none focus:ring focus:ring-green-600'>Medium</div>
            <div className='p-2 bg-orange-400 rounded-3xl font-semibold flex-1 text-center flex-warp cursor-pointer active:scale-75 focus:outline-none focus:ring focus:ring-green-600'>L</div>
            <div className='p-2 bg-orange-400 rounded-3xl font-semibold flex-1 text-center flex-warp cursor-pointer active:scale-75 focus:outline-none focus:ring focus:ring-green-600'>XL</div>
            <div className='p-2 bg-orange-400 rounded-3xl font-semibold flex-1 text-center flex-warp cursor-pointer active:scale-75 focus:outline-none focus:ring focus:ring-green-600'>XXL</div>    
        </div>
        </div>
        <button className='mt-5 bg-orange-600 font-bold p-4 mb-5 rounded-3xl' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='font-bold text-red-500'><span>Category :</span>Women, Men, T-shirt, Crop Top</p>
        <p className='font-bold text-red-500'><span>Category :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default Productdisplay
