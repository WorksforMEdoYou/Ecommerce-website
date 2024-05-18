import React, { useContext } from 'react'
import Footer from '../Components/Footer/Footer'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import Productdisplay from '../Components/ProductDisplay/Productdisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
<script src="https://cdn.tailwindcss.com"></script>
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <div>
          <Breadcrum product={product}/>
          <Productdisplay product={product}/>
          <DescriptionBox/>
          <RelatedProducts/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Product
