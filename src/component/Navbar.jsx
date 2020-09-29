import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Button = () => {
  return ( 
      <div className="btn-blub">
         <Link className="btn text-white btn-small pd-2" to="/cvdetails" path=""> CV Details</Link>
      </div>
      
   );
}
 
export default Button;