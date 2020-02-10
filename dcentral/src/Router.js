import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CreateProfile from './createprofile'
import App from './App'

const Routers =()=>(
    <BrowserRouter>
        <Switch>
    <Route  path ="/" component = {Login} />  
    <Route exact path ="/profile" component = {CreateProfile} />
    <Route  path ="/dashboard" component = {App} />

    </Switch>
    </BrowserRouter>
)

export default Routers;