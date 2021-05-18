import React from 'react'
import Login from './Login'
import muskIco from '../icons/musk.ico'
import {useAppState} from '../context'
import {Link} from 'react-router-dom'

export default function NavBar() {
    // destructuring
    const {state:{login:{isLogged}}} = useAppState();
    console.log(isLogged)   

    return (
        <nav className="flex justify-between bg-blue-300">           
             {/* picture tag is better than image as you can target diff devices */}
                <picture className="w-20 mx-20">
                     <source media="(min-width:650px)" srcSet={muskIco}/>
                     <source media="(min-width:465px)" srcSet={muskIco}/>
                     <img src={muskIco} alt="Flowers" style={{width:'auto'}}/>                           
                </picture>

                { isLogged && <div className="m-6  mr-6">
                    <button>Show BlockChain</button>
                </div>}

                { isLogged && <div className="m-6  mr-6">
                    <button>Mint Coin</button>
                </div>}
                
                <div className="m-6  mr-6">
                    <Login />  
                </div>
                       
        </nav>
    )
 }
