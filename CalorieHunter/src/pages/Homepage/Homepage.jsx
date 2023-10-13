import React from 'react';
import { Link } from 'react-router-dom';


function Homepage() {
   
    return (
      <>
       <h2>Welcome to</h2>
       <h1>Calorie Hunter</h1>
       <Link to="/CalorieCounter"> <button>Get Started</button>
       </Link>
      
      </>
    )
  }
  
  export default Homepage
  