import React, {useState} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
// import Login from './login';
function Navbaruser(){
    const [nav,setnav]=useState(false);
    const changeBackground = () =>
    {
        if(window.scrollY >= 50)
        {
            setnav(true);
        }
        else
        {
            setnav(false);
        }
    };
    window.addEventListener('scroll',changeBackground);
    return(
        <div id='main'>
        <nav className={nav ? "nav actve" : "nav"}>
             <Link to='main' className='logo'>
                <img src={logo} alt=''/>
             </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                  <span className='nav-icon'></span>
            </label>
            <div className='menu'>
                <ul>
                <li><Link to='Applyfortrainer' role="button">apply for trainer</Link></li>
                <li><Link to='#' role="button">generatetimetable</Link></li>
                <li><Link to='#' role="button">view attandence</Link></li>
                <li><Link to='#' role="button" >mark attandence</Link></li>
                </ul>
            </div>
        </nav>
        </div>
        )
}
export default Navbaruser;