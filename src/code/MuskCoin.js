import sha256 from 'crypto-js/sha256'

 const MuskCoin =  function(data,owner,parentHash="") {
  //   this.index = index
     this.data = data 
     this.owner = owner
     this.parentHash = parentHash
     this.timestamp = Date.now()
     // this will now work as its looking at window obj and there is no getCoinHash
     //this.hash = this.getCoinsHash()    

     // the function declaration wont work ....has to be lambda
     this.getCoinsHash = function(){
        let hash = sha256(`${this.data} : ${this.timestamp} : ${this.timestamp}` ).toString() 
        this.hash = hash
        return hash 
     }
   }

export default MuskCoin