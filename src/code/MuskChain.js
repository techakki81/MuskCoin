
import {v4 as uuidv4} from 'uuid';
import MuskCoin from './MuskCoin'
import useLocalStorage from 'react-use-localstorage';

import {constants} from '../utils'



const MuskChain  = function() {    

   // this.id = uuidv4()
   this.blockChain = []

    // load from the localstorage... if nothing then create one
   // const [item, setItem] = useLocalStorage('keyMuskCoin', null );
   let item = null
    const {keyLocalStrgMuskChain} = constants;
    
    this.createFirstBlock = ()=> {
        const first = new MuskCoin(0,0,0)
        return first
        //this.blockChain.push(first)
     }

    this.blockChain = item ? JSON.parse( item ): [this.createFirstBlock()]
    
    this.getLastBlock = () =>{
        return this.blockChain.slice(-1)[0]
    }

    this.addBlock= (coin)=>{
        coin.parentHash = this.getLastBlock().getCoinsHash()
        this.blockChain.push(coin)
       // setItem(JSON.stringify(this.blockChain))
    }
    
    
    this.verifyChain = ()=>{
        
        this.blockChain.every(  (element, index, array) => { 

            console.log(element)
            console.log(index)
            
           if (index===0 && element.parentHash===0){
               console.log(`if block true`)
                        return true 
                    }
            else
            {
               
              if (element.parentHash === array[index-1].hash){
                console.log(`else block true` )
                return true
              }
            }

            console.log(`ret false`)
            return false
           })
    }    

    this.getChain =()=>{
        return this.blockChain
    }
  }


  // export singleton
export default {
    getInstance: ()=>{
        let instance = null
        function createInstance() {
            if( !instance)
                instance = new MuskChain();
            return instance;
        } 
        return  createInstance()       
    }
}

