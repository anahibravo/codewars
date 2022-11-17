String.prototype.toAlternatingCase = function () {
    //console.log(this)
  return this.split('').map((x) => {
    if (x.toUpperCase() === x){
      return x.toLowerCase()
    }else return x.toUpperCase()
    
  })
  
    .join('')
    }