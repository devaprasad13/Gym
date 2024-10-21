import React from 'react'
import Img from '../Image/logoo.png'
import About from './About'
import Premium from './Premium'
import { Link } from 'react-router-dom'
export default function 
() {
  return (
    <>
  
    <div className='ji'>
     <nav className='navbar'>
        <ul className='nav-left'>
        <li><a href=''>Home</a></li>
            <li><Link href='#apout'>About</Link></li>
            <li><Link href='#o2'>MemberShip</Link></li>
            <li><Link href=''>Blog</Link></li>
            <li><Link href=''>Contact</Link></li>
        </ul>
        <div className="logo">
           <img class='logo-img' src={Img}></img>
    </div>
    <div className='nav-right'>
         <Link to='/Register' class='sign-in'>Signup</Link>
    </div>
    </nav>
    </div>
   
    </>

  )
}
