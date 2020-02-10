import React from 'react'
import './css/mycss.css'
import decagonlogo from './images/decagonlogo.png'


class Sidepix extends React.Component{
    render(){
        return(
            <div>
            <div className = 'bd-img d-flex flex-column justify-content-center'>
                <div className ='p-3 decagon_words'><img src={decagonlogo} alt='decagon-logo'/></div>
                <div>
                    <p className = 'text-white p-3 decagon_words'>Decagon is a software engineering institute ushering in a new
                         phase of tech-powered growth and prosperity in Nigeria by 
                         training and deploying an army of leader-developers.
                    </p>
                </div>
            </div>
            </div>
        )
    }
}

export default Sidepix;