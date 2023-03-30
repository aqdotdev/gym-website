import React from 'react';
import aboutimage from '../images/about.png'; 
function About()
{
  return(
      <div id='about'>
         <div className='about-image'>
              <img src={aboutimage} alt=''/> 
         </div>
         <div className='about-text'>
            <h1>Learn more about us</h1>
            <p className='details'>Lore ipsum dolor sit amet consectetur adipisicing elite.Facere repellat
            necessitatibus dolor ut nesciunt hic ipsum laboriosam soluta?Fugit,soluta culpa possimus facere fugiat 
            assmenda.</p>
            <button>READ MORE</button>
              
          </div>
      </div>
);
}
export default About;