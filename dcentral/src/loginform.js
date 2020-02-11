import React from 'react'
import './css/mycss.css'
import chatlogo from './images/chat.png'
import image1 from './images/Image2.png'
import arrow from './images/arrow.png'
import image3 from './images/Image3.png'
import image4 from './images/Image4.png'
import image5 from './images/Image5.png'


class Loginform extends React.Component{

    state = {
        credentials : {
            email:'',
            password: ''
        }
    }
    // myemail = React.createRef()
    // mypassword = React.createRef()

    gotoDashboard = event => {
        event.preventDefault()
        console.log('going to store')
        console.log(this.myemail)
        console.log(this.state.credentials)
    }

    emailchanges = event =>{
        const cred =this.state.credentials
        cred[event.target.name] = event.target.value
        this.setState({credentials:cred})
    }
    passwordchanges = event =>{
        const cred =this.state.credentials
        cred[event.target.name] = event.target.value
        this.setState({credentials:cred})
    }


    // value = {this.state.credentials.email}
    // value = {this.state.credentials.password} 
    // onChange= {this.passwordchanges} 
    // onChange= {this.emailchanges}
    render(){
        return(
            <React.Fragment>
                <div className = 'col-12'>
                <label className = 'font-weight-bolder'>Login</label>
                <form onSubmit = {this.gotoDashboard} >
                <div class="form-group">
                    <label for="inputemailAdd">Email Address:</label>
                    <input type="email" name = 'email' ref = {this.myemail} className="form-control" />
                </div>                    
                <div class="form-group">
                    <label for="inputPassword">Password:</label>
                    <input type="password" name = 'password' ref = {this.mypassword} className="form-control"/>
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