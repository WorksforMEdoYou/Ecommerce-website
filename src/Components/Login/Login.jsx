import React from 'react';
import { GoogleLogin } from 'react-google-login';
const clientId = "420083008706-t1g82qv4knski11gap4jfuqup4ordb0v.apps.googleusercontent.com";
<script src="https://cdn.tailwindcss.com"></script>
const Login = () => {

    const onSuccess = (res) =>{
        console.log('Login Success: currentUser:', res.profileObj);
    }
    const onFailure = (res) =>{
        console.log('Login Failed: res:', res);
        alert("Login Successful");
    } 

  return (
    <div id='SignInButton' className='h-full w-full rounded-3xl'>
        <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}

               
            />
    </div>
  )
}

export default Login
