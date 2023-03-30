import React,{useState} from 'react';
// import './Userprofile.css';

const Userprofile = () =>{
    
    return (
        <div className="userprofile">
             
            <h1>User Profile</h1>
            <input type="text" name="tranerID"  placeholder="Your ID" ></input>
            <input type="text" name="name"  placeholder="Your Name" ></input>
            <input type="text" name="email"  placeholder="Your Email" ></input>
            <div className='button'>Show profile</div>
            <div className='button'>Update profile</div>
            
        </div>
    );
}

export default Userprofile;