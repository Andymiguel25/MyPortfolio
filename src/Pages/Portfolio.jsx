import React from 'react'
import "../Styling/Portfolio.css"
import {Link} from "react-router-dom"
import img4 from "../assets/crystalMove.jpg"
import img2 from "../assets/bateria.jpg"
import img3 from "../assets/medcenter.jpg"


const Portfolio = () => {
  return (
    <div className='portfolioContainer'>
      <h1 className='portfolioHeader'>Portfolio</h1>

      <div className='portfolioList'>

             <Link><h3 className='List1'>ALL PAGES</h3></Link> 
             <Link><h3 className='List2'>LANDING SITES</h3></Link> 
             <Link><h3 className='List3'>E-COMMERCE</h3></Link> 
             <Link><h3 className='List4'>AUTOMOBILE</h3></Link> 
      </div>

      
      
      {/*  My Work */}
      <div className='portfolioGrid'>
      <Link to='https://med-center-eight.vercel.app/'> <img src={img3}  alt=""  className='portfolioImg'/></Link>
      <Link to='https://crystal-move.vercel.app/'> <img src={img4} alt=""  className='portfolioImg'/></Link>
      <Link>  <img src={img2} alt=""  className='portfolioImg'/></Link>
      <Link> <img src={img4} alt=""  className='portfolioImg'/></Link>
  
      </div>
    </div>
  )
}

export default Portfolio