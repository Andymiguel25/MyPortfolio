import React, { useState } from 'react'
import {Link, NavLink, Outlet} from "react-router-dom"
import "../Styling/Nav.css"

const Nav = () => {
 
//  this function helps the page reload 
  const handleReload = ()=> {
    window.location.reload();
  } 
  // const [color,setColor] = useState('white');


  // const colorChange = () =>{
  //   setColor (color === "white" ? "red" : "white")
     
  // }

  




    return (
    <>
    <nav className='navbar'>
       <NavLink to='/' onClick={handleReload}><div className='title'>Andy</div></NavLink >
                
       
        <div className='navOptions'>
            <ul >
              <NavLink to='/' onClick={handleReload}><li>Home</li></NavLink>
              <NavLink to='/about'><li >About</li></NavLink>
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
