import React, { useState } from 'react'
import {Link, NavLink, Outlet} from "react-router-dom"
import "../Styling/Nav.css"

const Nav = () => {
const [openMenu,setOpenMenu] = useState(false)
  
    return (
    <>
    <nav>
       <NavLink to='/'><div className='title'>Andy</div></NavLink >
                
       
        <div className='navOptions'>
            <ul>
              <NavLink to='/'><li className='homebutton'>Home</li></NavLink>
              <NavLink to='/about'><li>About</li></NavLink>
              <NavLink to='/portfolio'><li>Portfolio</li></NavLink>
              <NavLink to='/contact'><li>Contact</li></NavLink>
              
            </ul>
        </div>

    </nav>
    <Outlet/>
    </>
  )
}

export default Nav
