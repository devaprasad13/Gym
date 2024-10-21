import React from 'react'
import './Gym.css'
 export default function 
() {
  return (
    <div className='map' id='maping'>
        <div className='cont1'>
          <h1>SIGNUP OUR NEWSLETTER TO GET UPADATE INFORMATION, INSIGHT OR NEWS.</h1>
          <input type='email' placeholder='Email...'></input><button>Subcribe</button>
          <h4>We respect your privacy. Your information is safe and will never be shared</h4>
        </div>
         <div className='cont2'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.789200405219!2d76.9961177737767!3d10.903618956837317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85be5c008f471%3A0xf29333b87c089c58!2sFitbull%20Fitness%20Studio!5e0!3m2!1sen!2sin!4v1727110478437!5m2!1sen!2sin" style={{width:"300px",height:"200px",borderRadius:'10px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
    </div>
  )
}
