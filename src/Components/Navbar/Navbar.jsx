import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Asserts/logo.png'
import cart_icon from '../Asserts/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  // we use usestate for the underline should travel to another when clicked.
  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
            <p>SIRIUS</p>
        </div>
        <div className="bar">
          <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none', textDecorationColor: 'brown'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link  style={{textDecoration: 'none', textDecorationColor: 'brown'}} to='/mens'>Men</Link>{menu==="mens"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link  style={{textDecoration: 'none', textDecorationColor: 'brown'}} to='/womens'>Women</Link>{menu==="womens"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration: 'none', textDecorationColor: 'brown'}}  to='/kids'>Kids</Link>{menu==="kids"?<hr />:<></>}</li>
          </ul>
        </div>
        
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link> 
            <Link to='/cart'><img src={cart_icon} alt="cart iocon" /></Link> 
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar