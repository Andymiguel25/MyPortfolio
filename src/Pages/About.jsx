import React from 'react'
import "../Styling/About.css"
import img2 from "../assets/AndyMi.jpeg"
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='aboutContainer'>
      <div className='aboutImgContainer'>
        <img src={img2} alt="" className='aboutImg' /></div>
      
      <div className='aboutText'>
        <p className='aboutText1'>WHO AM I? </p>
        <p className='aboutText2'>Andrew Onyewuchi Agholor.</p>
        
        <h3>Professional Front-End Developer.</h3>
        <p className='aboutBio'>I'm a front-end developer aspiring to excel in all aspects of software development. With strong knowledge in creating responsive and user-friendly web applications, I am skilled in HTML, CSS, and React.js. Passionate about continuous learning, I am currently integrating Node.js into my skill set. Dedicated and innovative, I strive to provide user-friendly solutions. </p>
      <button className='aboutButton'>Download CV</button>
      <Link to='/contact'><button className='aboutButton2'>Employ Me</button></Link>
      </div>
      
    </div>
  )
}

export default About