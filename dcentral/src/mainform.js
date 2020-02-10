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
            <React.Fragment>
                <div className ='row mt-5'>
                    <div className = 'col d-flex justify-content-end'>
                        <p>Login</p>
                    </div>
                </div>
                <div className ='row mt-5'>
                    <div className = 'col'>
                        <p className ='font-weight-bold'>Create Profile</p>
                    </div>               
                </div>
                <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputFullName">FullName</label>
                    <input type="text" class="form-control" id="inputFullName"/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputUsername">Username</label>
                    <input type="text" class="form-control" id="inputUsername"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" class="form-control" id="inputPassword"/>
                </div>
                <div class="form-group">
                    <label for="inputemailAdd">Email Address</label>
                    <input type="email" class="form-control" id="inputemailAdd" />
                </div>
                <div class="form-group">
                    <label for="inputPosition">Position</label>
                    <input type="text" class="form-control" id="inputPosition" />
                </div>
                <button type="submit" class="btn btn-success">Join Now</button>
                <button type="submit" class="btn btn-success ml-3">Login</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Mainsec;