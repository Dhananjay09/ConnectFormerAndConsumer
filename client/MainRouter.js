import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import FarmerConsumer from './user/formerconsumer'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import FindPeople from './user/FindPeople'
const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users/:pin" component={Users}/>
        <Route path="/farmerconsumers/:pin" component={FarmerConsumer}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
        <Route path="/follow" component={FindPeople}/>
      </Switch>
    </div>)
}

export default MainRouter
