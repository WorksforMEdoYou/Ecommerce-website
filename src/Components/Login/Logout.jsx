import React from 'react'
import { GoogleLogout } from 'react-google-login';
const clientId = '420083008706-t1g82qv4knski11gap4jfuqup4ordb0v.apps.googleusercontent.com';
<script src="https://cdn.tailwindcss.com"></script>
const Logout = () => {

    const onSuccess = () => {
        console.log("Log out sucessfull");
        alert("Logout Successful");
    }

  return (
    <div id='signOutButton' className='h-full w-full rounded-3xl'>
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}

           
        />
      
    </div>
  )
}

export default Logout
