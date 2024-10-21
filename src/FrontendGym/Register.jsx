import React from 'react'
import bi from '../Image/angry.png'
import ci from '../Image/j1.png'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <>
     <div className="Registercontainer">
    
         <div className="loginpager">
         <div class="form-containerss">
         <img src={bi} style={{marginLeft:"110px",boxShadow53k65erj:"red 0px 3px 8px"}} ></img> 
      <p class="titler">Welcome To Bulls Fitness!</p>
      <form class="form">
      <input type="text" class="inputers" placeholder="Enter Your Username"/>
        <input type="email" class="inputers" placeholder="Enter Your Email"/>
        <input type="number" class="inputers" placeholder="Enter Your Phone Number"/>
        <input type="password" class="inputers" placeholder="Enter Your Password"/>
        <button class="form-btns">Sign Up</button>
      </form>
      <p class="sign-up-labels">
        Already have an account?<span class="sign-up-links"> <Link to="/Login">Login</Link> </span>
      </p>
     
    </div>
         </div>
         <div className="imageregisterpage">
             
         </div>
    </div>
    
    
    </>
  )
}
