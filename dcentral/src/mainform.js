import React from 'react'
import './css/mycss.css'
import chatlogo from './images/chat.png'
import image1 from './images/Image2.png'
import arrow from './images/arrow.png'
import image3 from './images/Image3.png'
import image4 from './images/Image4.png'
import image5 from './images/Image5.png'


class Mainsec extends React.Component{
    render(){
        return(
              
                <div className="">
                    <div className ='row'>
                        <div className ='col central d-flex align-items-end'>
                            <p className = 'ml-5'>Decagon Central</p>
                        </div>
                        
                    </div>
                    <div className="row justify-content-center mt-2">
                        <div className ='col-11 d-flex header_background'>
                        <div className = 'col d-flex flex-column justify-content-center'>
                        <p className ='card_title'>Hi Bond!!!</p>
                        <p className ='card_text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className ='col-6 d-flex justify-content-center'>
                            <img  className = "photo" src = {chatlogo} alt ='tablechat'/>
                        </div>          
                        </div>                                             
                    </div>
                    <div className ='row mt-3'>

                    <div className ='col-12 d-flex flex-row justify-content-around mt-4'>
                        <div className = 'col-5 card_background'>
                            <div className = 'col-12 d-flex align-items-end'>
                                <span className ='card_title'>Find an employee</span>
                            </div>
                            <div className ='col-12 d-flex flex-wrap'>
                            <div className='col-8'>
                            <p className='card-text'>Change your profile name, picture, twittter handle and bio. </p>                                                      
                            </div>
                            <div className ='col-4'>
                                <img  className = 'img-fuild photo2' src = {image1} alt ='employeer'/>
                            </div>
                            </div>
                            <p className ='card_link'>
                            Search Employees
                            <span className = 'ml-2'><img  className = 'img-fuild' src = {arrow} alt ='arrow'/></span>
                            </p> 
                        </div>
                        <div className = 'col-5 card_background'>
                            <div className = 'col-12 d-flex align-items-end'>
                                <span className ='card_title'>Find a Dev</span>
                            </div>
                            <div className ='col-12 d-flex flex-wrap'>
                            <div className='col-8'>
                            <p className='card-text'>Change your profile name, picture, twittter handle and bio. </p>                                                      
                            </div>
                            <div className ='col-4'>
                                <img  className = 'img-fuild photo2' src = {image3} alt ='employeer'/>
                            </div>
                            </div>
                            <p className ='card_link'>
                            Search Dev
                            <span className = 'ml-2'><img  className = 'img-fuild' src = {arrow} alt ='arrow'/></span>
                            </p> 
                        </div>                                   
                    </div>

                    <div className ='col-12 d-flex flex-row justify-content-around mt-4'>
                        <div className = 'col-5 card_background'>
                            <div className = 'col-12 d-flex align-items-end'>
                                <span className ='card_title'>Update Profile</span>
                            </div>
                            <div className ='col-12 d-flex flex-wrap'>
                            <div className='col-8'>
                            <p className='card-text'>Change your profile name, picture, twittter handle and bio. </p>                                                      
                            </div>
                            <div className ='col-4'>
                                <img  className = 'img-fuild photo2' src = {image4} alt ='employeer'/>
                            </div>
                            </div>
                            <p className ='card_link'>
                            Update profile
                            <span className = 'ml-2'><img  className = 'img-fuild' src = {arrow} alt ='arrow'/></span>
                            </p> 
                        </div>
                        <div className = 'col-5 card_background'>
                            <div className = 'col-12 d-flex align-items-end'>
                                <span className ='card_title'>Update Password</span>
                            </div>
                            <div className ='col-12 d-flex flex-wrap'>
                            <div className='col-8'>
                            <p className='card-text'>Change your profile name, picture, twittter handle and bio. </p>                                                      
                            </div>
                            <div className ='col-4'>
                                <img  className = 'img-fuild photo2' src = {image5} alt ='employeer'/>
                            </div>
                            </div>
                            <p className ='card_link'>
                            Update profile
                            <span className = 'ml-2'><img  className = 'img-fuild' src = {arrow} alt ='arrow'/></span>
                            </p> 
                        </div>                                   
                        </div>

                    </div>
                    <div className ='row'>
                        <div className ='col central d-flex flex-row align-items-end justify-content-between'>
                            <span className = 'ml-4'>Login</span>
                            <span className = 'mr-2'>Deca Dev</span>
                        </div>
                        
                    </div>                    
                </div>        
                           
        )
    }
}

export default Mainsec;