import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Siderbar from './sidebar';
import Mainsec from './main';
import './css/mycss.css'

function App() {
  return (
    <div className="App row back_ground container-fuild">

      <div className = "col-2 back_ground_sidebar">
        <Siderbar />      
      </div>
      <div className = "col-10">
        <Mainsec />      
      </div>  
    </div>
    
  );
}

export default App;
