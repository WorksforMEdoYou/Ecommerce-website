import React from 'react'
import footer_logo from '../Asserts/logo_big.png'
import insta from '../Asserts/instagram_icon.png'
import pintester from '../Asserts/pintester_icon.png'
import whatsapp from '../Asserts/whatsapp_icon.png'
<script src="https://cdn.tailwindcss.com"></script>
const Footer = () => {
    //printing the current year
    const currentYear = new Date().getFullYear();
    // end of current year
  return (
    <div className='bg-amber-900 text-white mt-6 flex  flex-col justify-center align-center'>
        <div className='flex justify-center align-center gap-3 p-4'>
            <img src={footer_logo} alt="" />
            <p className='p-11 font-bold'>Sirius</p>
        </div>
        <ul className="text-center font-semibold list-none">
            <li className='hover:text-yellow-500 cursor-pointer'>Company</li>
            <li className='hover:text-yellow-500 cursor-pointer'>Products</li>
            <li className='hover:text-yellow-500 cursor-pointer'>Offices</li>
            <li className='hover:text-yellow-500 cursor-pointer'>About</li>
            <li className='hover:text-yellow-500 cursor-pointer'>Contact</li>
        </ul>
        <div className='flex gap-5 mb-2 justify-center mt-4'>
            <div>
                <img src={insta} alt="instagram" />
            </div>
            <div>
                <img src={pintester} alt="pintester" />
            </div>
            <div>
                <img src={whatsapp} alt="whatsapp" />
            </div>
        </div>
        <div className='flex flex-col justify-center items-center p-4'>
            <hr/>
            <p>Copyright @ {currentYear} - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
