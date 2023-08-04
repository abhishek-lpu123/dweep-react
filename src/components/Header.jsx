import React, { useState } from 'react';
import './Header.css'
import ManImage from '../assets/man_image.png'

const Header = () => {
    const [mail,setMail] = useState()
    const [info, setInfo] = useState("")
    
    const isValidEmail = (email) =>{
       const  regex = /^[a-zA-Z0-9/._%+/-]+@[a-zA-Z0-9/./-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    const handleRegister = (e) =>{
        if(isValidEmail(mail)){
            setInfo(true);
        }
        else{
            alert("Please enter valid email id");
            setInfo(false);
        }
    }

    const handleChange = (e) =>{
        setMail(e.target.value);
    }

    const handleKeypress = (e) => {
      if (e.keyCode === 13) {
        handleRegister();
      }
    };

  return (
    <div class="header">
        <h1 class="heading">
            An inspiring design delivered to your inbox every morning
        </h1>
        <br/>
        <p class="description">
            Our team scouts the internet for the best designs, illustrations and art
				and delivers a truly inspiring one every day to your inbox
        </p>
        {info?<p class="showme">Thank You for Registering!</p>:<><p class="showme"></p>
        <input class="email-input" type="email" placeholder="Your e-mail address" value={mail} onChange={handleChange} onKeyDown={handleKeypress}/>
        <button onClick={handleRegister}>Register Now</button></>}
        <h5 class="white-text">Free - No Spam - No Data Sharing</h5>
        <img src={ManImage} alt="man_image"/>
      </div>
  )
}

export default Header