import React from 'react'
import {useAppState} from '../context'
import {constants} from '../utils'

export default function Login() {
    
    const {state:{login},dispatch} = useAppState();
    const {dispatchLoginClick} = constants 
    
    const onLoginClick = (e)=>{
        e.preventDefault()     
        dispatch(
            {
                type:dispatchLoginClick, 
                payload:{
                    isLogged:true,
                    loggedInName:"akshay"
                }
            }
            )
    }

    return (
        <div>
            <button onClick={onLoginClick}>               
                {login.isLogged? login.loggedInName:"Login"} 
            </button>
        </div>
    )
}
