import React from 'react';
import offerimage from '../images/offer.png'; 
function Offer()
{
  return(
      <div id='offer'>
         <div className='offer-image'>
              <img src={offerimage} alt=''/> 
         </div>
         {/* <div className='pr-heading'>
         <h1>A BIG<span>OFFER</span>FOR THIS SUMMMER</h1>
         <p className='details'>Lorean ipsum dolor sit amet consectetur adipisicing.</p>
              <div className='pr-btns'>
                  <a href='#' className='pr-btn'>JOIN NOW</a>
              </div>
          </div> */}
      </div>
);
}
export default Offer;