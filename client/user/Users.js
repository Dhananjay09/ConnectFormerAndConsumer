import React, {useState, useEffect} from 'react'
import { makeStyles, lighten } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ArrowForward from '@material-ui/icons/Visibility'
import Person from '@material-ui/icons/Person'
import {Link} from 'react-router-dom'
import {list} from './api-user.js'

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    borderRadius: "40px"
  }),
  title: {
    margin: `${theme.spacing(4)}px 10 ${theme.spacing(2)}px`,
    background: "#BABBC6"
  },
  list:{
    background: "#E0E3E2"
  }
}))

export default function Users() { 
  const classes = useStyles()
  const [users, setUsers] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        setUsers(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }
  }, [])


    return (
      <Paper className={classes.root} elevation={4}>
        <Typography variant="h4" className={classes.title}>
          All Users
        </Typography>
        <List sparse className={classes.list}>
         {users.map((item, i) => {
          return <Link to={"/user/" + item._id} key={i}>
                    <ListItem button>
                        <ListItemAvatar className={classes.avatar}>
                            <Avatar src={'/api/users/photo/'+item._id}/>
                        </ListItemAvatar>
                      
                      <ListItemText primary={item.name}/>
                      <ListItemSecondaryAction>
                      <IconButton>
                          <ArrowForward/>
                      </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                 </Link>
               })
             }
        </List>
      </Paper>
    )
}
