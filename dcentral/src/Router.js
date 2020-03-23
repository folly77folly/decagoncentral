import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CreateProfile from './createprofile'
import App from './App'
import Login from './login'

const Routers =()=>(
    <BrowserRouter>
        <Switch>
    <Route exact path ="/" component = {Login} />  
    <Route exact path ="/profile" component = {CreateProfile} />
    <Route exact path ="/dashboard" component = {App} />

    </Switch>
    </BrowserRouter>
)

export default Routers;