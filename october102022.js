function tripleTrouble(one, two, three){
    let together = ''
  for(let i = 0; i < one.length; i++){
    together += one[i]
    together += two[i]
    together += three[i]
  }
    return together
   }