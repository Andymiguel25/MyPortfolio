import React from 'react'
import Hero from '../Component/Hero'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
         <Portfolio/> 
         <Contact/>
         <Footer/>
      
    </div>
  )
}

export default Home