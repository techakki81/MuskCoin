import React from 'react'
import {MuskChain} from '../code'

export default function ShowMuskChain() {
 
 console.log(MuskChain.getInstance().getChain())
    return (
        <div>
            Musk Chain 
        </div>
    )
}
