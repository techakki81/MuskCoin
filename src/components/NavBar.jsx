import React from 'react'
import Login from './Login'
import muskIco from '../icons/musk.ico'
import {useAppState} from '../context'
import {Link} from 'react-router-dom'
import {constants} from '../utils'

export default function NavBar() {
    // destructuring
    const {state:{login:{isLogged}}} = useAppState()
    const {theme:{cssBgColorMain}} = constants
    console.log(isLogged)   

    // with bg-yello-700, i already have a theme pre selected. now i can
    // make use of the same pallette for buttons etc . i used yellow as i wanted 
    // to match the theme with the  musk icon skin color for musk 
    return (
        <nav className={`flex justify-between ${cssBgColorMain}`} >           
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
