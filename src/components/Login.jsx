import React from 'react'
import {useAppState} from '../context'
import {constants} from '../utils'

export default function Login() {
    
    const {state:{login},dispatch} = useAppState();
    const {dispatchLoginClick} = constants
    
    

    //const login= { isLoggedIn:false,loggedInName:""}
    const onLoginClick = (e)=>{
        e.preventDefault()
        login.isLoggedIn = true
        login.loggedInName = "akshay@akshaykoul.com"
        dispatch({type:dispatchLoginClick, payload:login})
    }

    return (
        <div>
            <button onClick={onLoginClick}>
                Logged in 
            {/* {isLoggedIn?"Name":"Login"} */}
            </button>
        </div>
    )
}
