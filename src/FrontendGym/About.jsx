import React from 'react'
import './Gym.css'
import arrow from '../Image/Arrows.png'
import workout from '../Image/man.jpg'
export default function  () {
  return (
    <div className="hi">
    <section className="personal-training-section">
     
    <p style={{fontWeight:'bold',fontSize:'3rem'}}>PERSONAL TRAINING</p>
    <div className="training-container">
 
      <div className="offer-box">
      
        <h2>WE OFFER</h2>
        <p>Free trial sessions for new members</p>
        <button className="sign-up-btn">Sign up</button>
      </div>
      <div className="training-image">
        <img 
          src={workout} 
          alt="Personal Training"
        />
      </div>
      <div className="trainers-box">
        <h2>+10 Personal Trainers</h2>
        <p>
          Our state-of-the-art facilities and expert trainers are here 
          to help you achieve your fitness goals, no matter your starting point.
        </p>
        <button className="explore-btn">Explore more</button>
      </div>
    </div>
  </section>
  </div>
  )
}
