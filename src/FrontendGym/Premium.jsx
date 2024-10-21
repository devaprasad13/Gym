import React from 'react'
import './Gym.css'
import photo from '../Image/arrow.png'
export default function Premium() {

  const plan =[
    {
      title:'Advanced',
      price:'$120/month',
      description:'Includes all basic benefits plus ulimited classes and access to premium amenities like the sauna and pool.'

    },
    {
      title: 'Basic',
      price: '$70/month',
      description: 'Start your fitness journey today with Bull Gym and discover the benefits of our Basic Membership.'
    },
    {
      title: 'Family',
      price: '$580/month',
      description: 'Enjoy discounted rates for families with full access to all gym amenities and classes for up to 4 members.'
    }
  ]
  return (
    <>
    <div className='premium' id='o2'>
         
         <div className='p1'>
               <div className='pa1'>
                    <img src={photo}style={{width:'10rem'}}></img>
                     
                     
                    <div className='p2'>
                    <div className='box1'>
                         <div className='m1'>
                           <h1 style={{fontWeight:'bold'}}>Premium</h1>
                           <button id='order'>Order now</button>
                         </div>
                         <div className='m1'>
                             <h3>$ 320</h3><span style={{color:'grey'}}>/month</span>
                         </div>
                     </div>
                     <ul id='lists'>
                        <li>✅ Professional Trainers</li>
                        <li>✅ All facilities</li>
                        <li>✅ Free drink and supplement</li>
                        <li>✅ diet program</li>
                    </ul>
                    </div>

                   
               </div>
               <div className='pa2'>
                 <h1 style={{color:'#ffff',textAlign:'center',fontSize:'3rem',fontWeight:'bold'}}>FLEXIBLE MEMBERSHIP PLANS TO SUIT YOUR LIFESTYLE</h1>
               <div >
               <span id='line'>
                </span>&nbsp;&nbsp;&nbsp;&nbsp; <span style={{fontSize:"2.5rem",background:'white',borderRadius:'50px',cursor:'pointer'}} role='button'>⬅</span > &nbsp; <span style={{cursor:'pointer',fontSize:"2.5rem",background:'white',borderRadius:'50px'}}>➡</span>
               </div>
               <div className='membership'>
                 {plan.map((plan,index)=>(
                   <div className='plan' key={index}> 
                         <h3>{plan.title}</h3>
                         <p className='price'>{plan.price}</p>
                         <p className='description'>{plan.description}</p>
                   </div> 
                 ))}
               </div>
               </div>

               
         </div>
    </div>
    </>
  )
}
