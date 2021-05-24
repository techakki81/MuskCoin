import { MusicNoteSharp } from '@material-ui/icons'
import React from 'react'
import {MuskChain,MuskCoin} from '../code'

export default function Mint () {

    
    const mintCoin = ()=>{
        let chain = MuskChain.getInstance()
    
        let coin1 = new MuskCoin("first","akshay1")
        chain.addBlock(coin1)
    
        let coin2 = new MuskCoin("first2","akshay2")
        chain.addBlock(coin2)
    
        let coin3 = new MuskCoin("first3","akshay3")
        chain.addBlock(coin3)
    
        console.log(chain.blockChain)
        console.log(chain.verifyChain())
        
    }

    return (
        <div>
           
            <button onClick={mintCoin} >
                Mint Ma Coin     
            </button>
        </div>
    )
}
