import React from 'react'
<script src="https://cdn.tailwindcss.com"></script>
const LoginSignup = () => {

    function password(){
        const passcode = document.getElementById("Password");
        const confirmpasscode = document.getElementById("ConfirmPassword");
        if(passcode.value !== confirmpasscode.value){
            alert("Enter the Correct password");
        }
        else{
            const conformed_password = passcode;
            return conformed_password;
        }
    }

  return (
    <div>
      <div>
        <h1 className='text-center font-bold font-300 mb-5'>Sign Up</h1>
        <div className='grid grid-col-1 gap-3'>
            <input type="text" placeholder='Name' className='w-full rounded-3xl p-3 active:border-none'/>
            <input type="email" placeholder='Email' className='w-full rounded-3xl p-3 active:border-none'/>
            <input type="password" id='Password' placeholder='Password' className='w-full rounded-3xl p-3 active:border-none'/>
            <input type="password" id='ConfirmPassword' placeholder='Confirm Password' className='w-full rounded-3xl p-3 active:border-none'/>
        </div>
        <button className='m-3 p-3 font-bold w-full text-center bg-orange-800 rounded-3xl' onClick={()=>{password()}}>Continue</button>
        <p className='flex gap-2 text-center'>
            Already have a Account? <span className='text-blue-300 font-bold text-center'>Login Here</span>
        </p>
        <div className='flex gap-2'>
            <input type="checkbox" name='' id=''/>
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
