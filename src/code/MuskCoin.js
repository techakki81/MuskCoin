import sha256 from 'crypto-js/sha256'

 function MuskCoin(index,cost,parentCoin) {
     this.index = index
     this.cost = cost 

     this.previousHash = typeof parentCoin=== MuskCoin? parentCoin.hash:parentCoin
     this.timestamp = Date.now()
     this.hash = getCoinsHash()

     // the function declaration wont work ....has to be lambda
     this.getCoinsHash =() =>{
        return sha256(`${this.cost} : ${this.timestamp}` );
     }
   }

export default MuskCoin