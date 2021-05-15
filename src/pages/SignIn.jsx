import React,{useRef} from 'react'
import {useAppState} from '../context'
import {constants} from '../utils'
import {useHistory } from 'react-router-dom'
import muscSmoke from '../icons/muskSmoking.jpg'

export default function Login() {
    
    const {dispatch} = useAppState();
    // why ref and not useState ? because useState causes rerender .
    const inptRef = useRef(null)
    const {dispatchLoginClick} = constants 
    const history = useHistory()

    const onLoginClick = (e)=>{
        e.preventDefault()     
        dispatch(
            {
                type:dispatchLoginClick, 
                payload:{
                    isLogged:true,
                    loggedInName:inptRef.current.value
                }
            }
            )
          history.push("/")            
    }  

    return (         
                           
    <div className ="w-full lg:max-w-full lg:flex m-6">
      <div 
        className="
          h-48 
          lg:h-auto 
          lg:w-48 
          flex-none 
          bg-cover 
          rounded-t 
          lg:rounded-t-none 
          lg:rounded-l 
          text-center 
          overflow-hidden" 
                style={{backgroundImage:`url(${muscSmoke})`}} title="Mountain" />
      
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <input 
            className="w-96 h-12 border-2 border-blue-200" 
            type="text" 
            ref={inptRef} 
            placeholder="account name" />
         
          <button className="
            m-4
            w-20
            self-center
            bg-gray-300 
            hover:bg-gray-400 
            text-gray-800 
            font-bold 
            py-2 
            px-4 
            rounded 
            inline-flex 
            items-center"
          onClick={onLoginClick}>Login</button>
      </div>
     </div>
    )
}
      