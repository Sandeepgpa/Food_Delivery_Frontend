import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {

    const [currentState,setCurrentState] = useState("Login");
  return (
    <div className='login-popup'>
        <div className="login-popup">
            <form action="" className="login-popup-cotainer">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currentState==='Login'?<></>:<input type="text" name="" placeholder='Your name' required />}
                    <input type="email" name="" placeholder='Your email' required/>
                    <input type="password" name="" placeholder='Password' required />
                </div>
                <button>{currentState==="sign Up"?"Create account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" name="" required />
                    <p>By continuing, i agree to the terms of use & privacy Policy.</p>
                </div>
                <p>Create a new account ? <span>Click here</span></p>
            </form>
        </div>

    </div>
  )
}

export default LoginPopup