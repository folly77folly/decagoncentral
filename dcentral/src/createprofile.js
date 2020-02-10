import React from 'react';
import logo from './logo.svg';
import Sidepix from './sidepix';
import Mainform from './mainform';
import './css/mycss.css'

function CreateProfile() {
  return (
    <div className="container">
      <div className ='row'>
      <div className = 'col-12 d-flex CreateProfile mt-5'>
      <div className = "col-7 ">
        <Sidepix />      
      </div>
      <div className = "col-5">
        <Mainform />      
      </div>          
      </div>        
      </div>
    </div>
    
  );
} 

export default CreateProfile;
