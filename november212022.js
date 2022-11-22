function sumMix(x){
    let sum = 0
    x = x.map(Number)
      
      for (let i=0; i< x.length; i++){
         sum = sum + x[i]
      }
       return sum
      
    }