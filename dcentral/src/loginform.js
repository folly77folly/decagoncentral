import React from 'react'
import './css/mycss.css'
import chatlogo from './images/chat.png'
import image1 from './images/Image2.png'
import arrow from './images/arrow.png'
import image3 from './images/Image3.png'
import image4 from './images/Image4.png'
import image5 from './images/Image5.png'


class Loginform extends React.Component{
    email = React.createRef()
    password = React.createRef()

    gotoDashboard = event => {
        event.preventDefault()
        console.log('hi')
        console.log(this.email)
        console.log(this.password)
    }

    render(){
        return(
            <React.Fragment>
                <div className = 'col-12'>
                <label className = 'font-weight-bolder'>Login</label>
                <form onSubmit={this.gotoDashboard}>
                <div class="form-group">
                    <label for="inputemailAdd">Email Address:</label>
                    <input type="email" ref = {this.email} className="form-control" />
                </div>                    
                <div class="form-group">
                    <label for="inputPassword">Password:</label>
                    <input type="password" ref = {this.password} className="form-control"/>
                </div>
                <div className ='col-12 d-flex flex-wrap p-2'>
                <div className ='col-lg-3 col-sm-12'><button type="submit" class="btn btn-success">Login</button></div>
                <div className ='col-lg-9 col-sm-12'><a href={'/profile'} class="btn btn-success">create an account</a></div>                    
                </div>
                </form>                    
                </div>
            </React.Fragment>
        )
    }
}

export default Loginform;