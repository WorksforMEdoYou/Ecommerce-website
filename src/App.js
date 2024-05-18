import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
//google login and logout
/* import Login from './Components/Login/Login';
import Logout from './Components/Login/Logout'; */
import Google from './Components/Login/Google';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
// end of google login and logout
import men_banner from './Components/Asserts/banner_mens.png';
import women_banner from './Components/Asserts/banner_women.png';
import kids_banner from './Components/Asserts/banner_kids.png';

//client Id
const clientId="420083008706-t1g82qv4knski11gap4jfuqup4ordb0v.apps.googleusercontent.com";
//end of client ID
function App() {
// Google login start
useEffect(()=>{
  function start(){
    gapi.client.init({
      clientId:clientId,
      scope:""
    })
  };
  gapi.load('client:auth2',start);
});
//Google login end 

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid"/>}/>
          <Route path='/Product' element={<Product />}>
            <Route path=':productId' element={<Product />}></Route>
          </Route>

          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Google/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
