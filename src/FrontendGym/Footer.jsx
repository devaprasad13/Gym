import React from 'react'
import po from'../Image/po.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='ui'>
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={po} alt="Bull Logo" className="logos" />
          <p>S.V.Colony East Extension<br />Tiruppur-641602</p>
          <a href="mailto:info@bull.com">info@bull.com</a>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Menu</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Membership</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Operational</h3>
          <p>Every day: 9:00 a.m - 10:00 p.m<br />Sat - Sun: &nbsp;8:00 a.m - 11:00 p.m</p>
          <h4>New Schedule?</h4>
          <p>+91 8870225462</p>
        </div>
      </div>
      <div className="footer-bottom">
      <div style={{fontSize:'1.5rem'}}> <a href='#' target='blank'><FaInstagramSquare /></a>&nbsp;&nbsp;<a href=""><FaLinkedin /></a>&nbsp;&nbsp;<a href=""> <FaFacebookSquare /></a>&nbsp;&nbsp; <a href=""><FaTwitter/></a> </div> 


        <p>Copyright © BULL. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  )
}
