import React from 'react'
import './css/mycss.css'
import logo from './images/logo1.png'


class Siderbar extends React.Component{
    render(){
        return(
                <React.Fragment>
                <div className='mt-5 mb-5'><a className="navbar-brand" href="#"><img className ='img-fluid mt-5 mb-5' src={logo} alt ="Decangon logo" /></a> </div>                 
                <div className="nav flex-column nav-pills mt-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <ul className="navbar-nav">
                    {/* <li><i class="fa-li fa fa-check-square"></i>List icons</li>                         */}
                    <li className="nav-item active mt-4">
                        <a className="nav-link" href="#"><i className="fa-li fa fa-home"></i>Dashboard</a>
                    </li>
                    <li className="nav-item mt-4">
                        <a className="nav-link" href="#"><span><i className="fa-li fa fa-user-plus "></i></span>Create Profile</a>
                    </li>
                    <li className="nav-item mt-4">
                        <a className="nav-link" href="#"><span><i className="fa-li fa fa-address-card "></i></span>My Profile</a>
                    </li>
                    <li className="nav-item mt-4">
                        <a className="nav-link" href="#" aria-disabled="true"><span><i className="fa-li fa fa-tasks"></i></span>Task</a>
                    </li>
                    <li className="nav-item mt-4">
                        <a className="nav-link" href="#" aria-disabled="true"><span><i className="fa-li fa fa-users "></i></span>Create Team</a>
                    </li>
                    </ul>
                </div>
                <div className = "p-0">
                    space
                </div>
                ddddd                                   
                </React.Fragment>                      
        )
    }
}

export default Siderbar;