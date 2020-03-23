import React from 'react'
import './css/mycss.css'



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
                <div className='d-flex flex-wrap'>
                    <div className='col-4'><button type="submit" class="btn btn-success">Join Now</button></div>
                    <div className= 'col-6'><a href={'/'} class="btn btn-success">Login</a></div>
                </div>
                
                </form>
            </React.Fragment>
        )
    }
}

export default Mainsec;