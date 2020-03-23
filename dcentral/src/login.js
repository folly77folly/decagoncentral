import React from 'react';
// import logo from './logo.svg';
import Sidepix from './sidepix';
import Loginform from './loginform';
import './css/mycss.css'

function Login() {
  return (
    <div className="container">
      <div className ='row'>
      <div className = 'col-12 d-flex wrap CreateProfile mt-5'>
      <div className = "col-7 ">
        <Sidepix />
      </div>
      <div className = "col-5 d-flex align-items-center">
        <Loginform />
      </div>          
      </div>        
      </div>
    </div>
    
  );
} 

export default Login;
