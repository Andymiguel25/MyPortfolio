import React from 'react'
import "../Styling/Portfolio.css"
import {Link} from "react-router-dom"

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
      <div>
      <Link><img src="" alt="" /></Link>
      <Link></Link>
      <Link></Link>
      <Link></Link>
      </div>
    </div>
  )
}

export default Portfolio