import React from 'react'
import './login.css'


 const login = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">Email</div>
            <img src="" alt="" />
            <input type="email" />
        </div>
        <div className="inputs">
            <div className="input">Password</div>
            <img src="" alt="" />
            <input type="password" />
        </div>
        <div className="forgotPassword">Forgot Your Password?<span> Click Here</span></div>
        <div className="submitContainer"></div>
        <div className="submit"> Login</div>
    </div>
  )
}
export default login 