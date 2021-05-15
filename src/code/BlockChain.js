import MuskCoin from './MuskCoin'

function BlockChain() {

    this.chain = [this.createFirstBlock()]

    this.createFirstBlock =()=>{
        return new MuskCoin(0,0,0)
    }

    this.getLastBlock = () =>{
        return this.chain.slice(-1)
    }

    this.addBlock= (coin)=>{
        this.chain.push(coin)
    }
    
    this.isValidChain =()=>{
        
        //this.chain.every()
    }  
  }

export default BlockChain

