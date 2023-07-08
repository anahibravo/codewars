function uniTotal (string) {
    return string.split('').map (char => char.charCodeAt(0))
      .reduce((total,code) => {
      return total + code}, 0) 
      
  }