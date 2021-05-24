import { MusicNoteSharp } from '@material-ui/icons'
import React from 'react'
import {MuskChain,MuskCoin} from '../code'

export default function Mint () {

    let chain = MuskChain.getInstance()
    const newCoin = new MuskCoin("muskname","akshay koul",chain.createFirstBlock() )
    console.log(chain)
    
    return (
        <div>
            Mint Coin
        </div>
    )
}
