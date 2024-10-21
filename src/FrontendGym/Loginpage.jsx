import React from 'react'
import bi from '../Image/angry.png'
import ci from '../Image/j1.png'
import { Link } from 'react-router-dom'
export default function Loginpage() {
  return (
    <>

    <div className="containerss">
    <div className="imageloginpage">
             
         </div>
         <div className="loginpage">
         <div class="form-container">
         <img src={bi} style={{marginLeft:"110px",boxShadow53k65erj:"red 0px 3px 8px"}} ></img> 
      <p class="title">Hey Bulls,Welcome Back !👋</p>
      <form class="form">
        <input type="email" class="inputers" placeholder="Email"/>
        <input type="password" class="inputers" placeholder="Password"/>
        <p class="page-link">
          <span class="page-link-label">Forgot Password?</span>
        </p>
        <button class="form-btn">Log in</button>
      </form>
      <p class="sign-up-label">
        Don't have an account?<span class="sign-up-link"><Link to="/Register">Sign up</Link></span>
      </p>
     
    </div>
         </div>
         
    </div>
    
    
    </>
  )
}
