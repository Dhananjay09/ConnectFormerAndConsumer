import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: 'black'}
  else
    return {color: 'black'}
}
const Menu = withRouter(({history}) => (
<<<<<<< HEAD
  <AppBar position="sticky" color="inherit">
=======
  <AppBar position="sticky" color="white">
>>>>>>> c0e4a6ee08fae9f27deb69904fe4e9b4099c07c7
    <Toolbar>
      <Typography variant="h4" color="inherit">
        Best products
      </Typography>
      
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, "/")}>
          <HomeIcon  fontSize="large" color="primary"/>
        </IconButton>
      </Link>
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive(history, "/signup")}>Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, "/signin")}>Sign In
            </Button>
          </Link>
        </span>)
      }
      {
        
        auth.isAuthenticated() && (<span>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
          </Link>
          <Link to={"/users/" + auth.isAuthenticated().user.pin}>
            <Button style={isActive(history, "/users/" + auth.isAuthenticated().user.pin)}>All Users</Button>
          </Link>
          <Link to={"/farmerconsumers/" + auth.isAuthenticated().user.type}>
            <Button style={isActive(history, "/users/" + auth.isAuthenticated().user.pin)}>Farmer/Consumers</Button>
          </Link>
          <Link to={"/follow"}>
            <Button style={isActive(history, "/follow/")}>User to follow</Button>
          </Link>
          

          <Button background="red" onClick={() => {
              auth.clearJWT(() => history.push('/'))
            }}>Sign out</Button>
        </span>)
        
      }
    </Toolbar>
  </AppBar>
))

export default Menu
