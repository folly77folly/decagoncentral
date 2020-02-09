import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Sidepix from './sidebar';
import Mainform from './main';
import './css/mycss.css'

function CreateProfile() {
  return (
    <div className="App row back_ground container-fuild">

      <div className = "col-6 back_ground_sidebar">
        <Sidepix />      
      </div>
      <div className = "col-6">
        <Mainform />      
      </div>  
    </div>
    
  );
} 

export default CreateProfile;
