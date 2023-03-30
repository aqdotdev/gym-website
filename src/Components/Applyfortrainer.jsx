import React,{useState} from 'react';
// import './Applyfortrainer.css';
const Applyfortrainer = () =>{
    return (
        <div className="trainer">
            <h1>Apply For Trainer</h1>
            <input type="text" name="name"  placeholder="Your Name" ></input>
            <input type="text" name="name"  placeholder="Your Name" ></input>
            <input type="text" name="tranerID"  placeholder="Your ID" ></input>
            <input type="text" name="email"  placeholder="Your Email" ></input>
            <textarea  type="name" name="description" row="5" cols="10" placeholder="Description(75word)" ></textarea>
            <div className='button'>SUBMIT</div>
            
        </div>
    );
    }

export default Applyfortrainer;