import React from 'react'
import Login from './Login'
import Logout from './Logout'
import LoginSignup from './LoginSignup'
<script src="https://cdn.tailwindcss.com"></script>
const Google = () => {

  return (
    <div className='grid grid-col-1 bg-orange-500 justify-center align-center gap-5'>
        <div className='h-full w-full bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 p-10 rounded-2xl mt-3 mb-2'>
            <LoginSignup/>
        </div>
        <div>
        <hr className='h-2 w-50% bg-black rounded-3xl'/><p className='font-bold text-center'>or</p><hr className='rounded-3xl h-2 w-50% bg-black'/>
        </div>
        <div className='h-full w-full bg-gray-700 mb-5 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 p-5 flex flex-col align-center justify-center bg-orange-400 font-bold text-center rounded-2xl w-full mb-3'>
           <Login/> 
            <p>Login with your Google Account</p>
           <Logout/>
            <p>Logout from your Google Account</p>
        </div>
    </div>
  )
}

export default Google
