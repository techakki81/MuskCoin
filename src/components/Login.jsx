import React from 'react'
import {useAppState} from '../context'
import {Link} from 'react-router-dom'

export default function Login() {
    
    const {state:{login}} = useAppState();
   
    return (
        <div>
           {login.isLogged? login.loggedInName:<Link to="/signIn">SignIn</Link>}             
        </div>
    )
}
