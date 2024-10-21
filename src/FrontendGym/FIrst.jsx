import React from 'react'
import './Gym.css'
import Navbar from './Navbar'
import Premium from './Premium'
import Map from './Map'
import Footer from './Footer'
import SuccessStories from './Forth'
import About from './About'
import Choose from './Choose'
export default function First() {
  return (
    <>

   <Navbar/>
    <div className='first'>
        <div className="Home">
 <div className='content'>
        <h1>YOUR FITNESS JOURNEY BEGINS HERE</h1>
        <h5>Our state-of-the-art facilities and expert trainers are here to help you achieve your finess goals, no matter your starting point. </h5><br></br>
        <button>Explore more <span style={{background:'white',borderRadius:'5px',padding:'2px 2px 2px 2px'}}>➡</span> </button>
        </div>
    </div>
    </div>
    <Choose/>
    <Premium/>
    <SuccessStories/>
<Map/>
<Footer/>


    </>
  )
}
