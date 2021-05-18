
import {v4 as uuidv4} from 'uuid';
import MuskCoin from './MuskCoin'
import useLocalStorage from 'react-use-localstorage';

import {constants} from '../utils'


function MuskChain() {    

    this.id = uuidv4()

    // load from the localstorage... if nothing then create one
    const [item, setItem] = useLocalStorage('keyMuskCoin', 'Initial Value');
    const {keyLocalStrgMuskChain} = constants;
    
    this.blockChain = item ? JSON.parse( item ): [this.createFirstBlock()]

    this.createFirstBlock =()=>{
        return new MuskCoin(0,0,0)
    }

    this.getLastBlock = () =>{
        return this.blockChain.slice(-1)
    }

    this.addBlock= (coin)=>{
        this.blockChain.push(coin)
        setItem(JSON.stringify(this.blockChain))
    }
    
    this.isValidChain =()=>{
        
        //this.chain.every()
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

