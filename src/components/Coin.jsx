import React from 'react'

export default function Coin(coin) {
    
    const {owner, hash, parent} = coin

    return (
        <div className="bg-yellow-100 m-6 rounded-lg  w-96 flex">
                <div className="p-3">
                     <picture>
                         <source media="(min-width:650px)" srcSet={muskIco}/>
                         <source media="(min-width:465px)" srcSet={muskIco}/>
                         <img src={muskIco} alt="Flowers" className="w-24" />                           
                     </picture>
                </div>
                
                <div className="p-6">
                    <p> {owner} </p> 
                    <p> {hash} </p>
                    <p> {parent} </p>     
                </div>
                
            </div>
    )
}
