import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Button = () => {
  return ( 
         <Link className="btn btn-lg btn-danger text-white btn-small pd-2" to="/cvdetails" path=""> CV Details</Link>
   );
}
 
export default Button;