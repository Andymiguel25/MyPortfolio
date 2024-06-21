import React from 'react'
import "../Styling/Hero.css"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img from '../assets/andyimg.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
   
    

    <div >
        {/* img for herobox
       <img src={img} alt="" className='img'/>  */}
        <div className='container'> 
        
            <p className='para1'>Welcome to my Page!</p>
            <p className='para2'>I am a <span>Front-End Developer</span></p>
           
            <div className='socialMediaIcons'>
            <ul>
               <Link to='https://www.instagram.com/andymiguel_25?igsh=c2Qwb25iMWUwa29u&utm_source=qr'><li><FaInstagram /> </li></Link> 
               <Link to='https://www.linkedin.com/in/andrew-agholor-0a2647244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><li> <FaLinkedin /></li></Link> 
               
               <Link> <li><FaXTwitter /></li></Link>
                
                </ul>
            </div>
        </div>

        {/* // <>
    // <div className='heroContainer'>
    // <div>
    //     <img src={img} alt="" className='heroImg' />
    // </div>

    // </div>
    // </> */}
    </div>
  )
}

export default Hero