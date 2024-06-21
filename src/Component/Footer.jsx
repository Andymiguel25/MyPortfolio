import React from 'react'
import "../Styling/Footer.css"
import {Link} from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footerContainer'>
        {/* footer header */}
            <Link to='/'><h3>Andy</h3></Link> 

       {/* footer socialmediaIcons */}
       <div className='footerIcons'>
            <Link to='https://www.instagram.com/andymiguel_25?igsh=c2Qwb25iMWUwa29u&utm_source=qr'><li><FaInstagram/> </li></Link> 
            <Link to='https://www.linkedin.com/in/andrew-agholor-0a2647244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><li> <FaLinkedin/></li></Link> 

            <Link> <li><FaXTwitter /></li></Link>        
       </div>
        {/*copyright  */}
        <div>
        <p>&copy; 2023 Andrew Onyewuchi Agholor. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer