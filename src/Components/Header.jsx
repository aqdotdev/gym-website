import React from 'react';
import {Link} from "react-router-dom";
function Header()
{
  return(
      <div id='main'>
          <div className='name'>
              <h2>WELCOME</h2>
              {/* <h1><span>FITNESS</span>WITH US</h1>
              <p className='details'>Build your body</p> */}
              <div className='header-btns'>
                  <Link className='header-btn' to="/Login" role="button">JOIN US</Link>
              </div>
          </div>
      </div>
  );  
    
}
export default Header;