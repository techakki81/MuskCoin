import React from 'react'
import Login from './Login'
import muskIco from '../icons/musk.ico'

export default function NavBar() {
    
    return (
        <nav 
               className="flex justify-between bg-blue-300">           
             {/* picture tag is better than image as you can target diff devices */}
                <picture className="w-20 mx-20">
                     <source media="(min-width:650px)" srcSet={muskIco}/>
                     <source media="(min-width:465px)" srcSet={muskIco}/>
                     <img src={muskIco} alt="Flowers" style={{width:'auto'}}/>                           
                </picture>
                <div className="m-6  mr-6">
                    <Login />  
                </div>
                       
        </nav>
    )
 }
