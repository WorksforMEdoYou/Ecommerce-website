import React from 'react'
import './Newsletter.css'
<script src="https://smtpjs.com/v3/smtp.js"></script>
const Newsletter = () => {
/*   function sendEmail() {
    const mail = document.getElementById("mail").value;
    mail.send({
        Host: "smtp.gmail.com",
        Username: "rajeshkumar7102002@gmail.com",
        Password: "Enter your password",
        To: mail,
        From: "rajeshkumar7102002@gmauil.com.com",
        Subject: "Sorry, This is a try on webdevelopment.",
        Body: "I am so exited for seeing my website thanks a lot. if you give me a try for do a website i wll. Iam a fresher who looking for a oppunility to get placed in a Information Technology Company, if you are a developer please suggest me in your comapny if any thing that need to improve tell me i will. :)",
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
} */
  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offers On Your Mail,</h1>
      <h1>We are here to help you.</h1>
      <p>Link Your Email & keep posted.</p>
      <div className='inp'>
        <input type="email" id='mail' placeholder='Enter your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
