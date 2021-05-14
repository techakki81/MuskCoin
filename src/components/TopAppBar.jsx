import React from 'react'
import {AppBar,Toolbar,IconButton, Typography,Button,} from '@material-ui/core'
// import {Menu} from '@material-ui/icons/Menu'

export default function TopAppBar() {
    
    return (
        <div>
            <AppBar position="static">
                 <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                     
                    </IconButton> 
                    <Typography variant="h6" >
                    News
                    </Typography>
                    <Button color="inherit">Login</Button> 
                </Toolbar> 
            </AppBar>
        </div>
    )
    }
