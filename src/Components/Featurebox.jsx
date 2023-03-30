import React from 'react';
function Featurebox(props)
{
  return(
      <div className='a-box'>
         <div class='a-b-image'>
            <img src={props.image} alt=''/>
         </div>
         <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>Loren adipisicing</p>
         </div>
      </div>

  );
}
export default Featurebox;