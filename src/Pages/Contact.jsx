import React from 'react'
import "../Styling/Contact.css"


const Contact = () => {
  return (
    
    
    // div fot the whole container 
    <div className='contactContainer'> 
     
{/* header */}
        <h1 className='contactheader'>Contact Me</h1>

         
         {/* this div carrys the inputs and contact details  */}
            
            <div className='contactBody'>
                {/* contact details div  */}
                <div className='contactDetails'>
                <h4>PHONE NUMBER: <br/> <span>+234 814 780 6968</span></h4>
                <h4>HOME ADDRESS: <br/><span>HD terrace, Lekki, Lagos, Nigeria.</span></h4>
                <h4>E-MAIL ADDRESS: <br/> <span>andrewagholor1@gmail.com</span></h4>
                </div>
            {/* contact details div end */}

         
          {/*  input div */}
          <div className='contactInputs'>
            
            {/* input 1 */}
            <div>
               <input type="text" placeholder='Full Name' className='input'/>
            </div>

          {/* input 2*/}
            <div>
               <input type="text"  placeholder='Email'  className='input'/>
            </div>
           
           {/* input 3*/}
           <div>
               <input type="text"  placeholder='Subject' className='input'/>
            </div>

          {/* input 4*/}
          <div>
               <input type="text" placeholder='Message' className='input4'/>
            </div>

            <button className='contactButton'>Send Message</button>
          </div>
          {/* end of input div  */}

</div>

    </div>
  )
}

export default Contact