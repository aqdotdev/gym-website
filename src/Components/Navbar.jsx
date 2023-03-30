import React, {useState} from 'react';
import logo from '../images/logo.png';
import {Link as Link1} from 'react-scroll';
import {Link as Link2} from 'react-router-dom';
// import Login from './login/login';
function Navbar(){
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
        <nav className={nav ? "nav actve" : "nav"}>
             <Link1 to='main' className='logo'>
                <img src={logo} alt=''/>
             </Link1>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                  <span className='nav-icon'></span>
            </label>
            <div className='menu'>
                <ul>
                <li><Link1 to='main'>Header</Link1></li>
                <li><Link1 to='about'>About</Link1></li>
                <li><Link1 to='contact'>Contact</Link1></li>
                <li> <Link2  to='/login' role="button" >Login as admin</Link2></li>
                <li> <Link2  to='/login' role="button" >Login as User</Link2></li>
                
                </ul>
            </div>
            
        </nav>
        )
}
export default Navbar;