function rentalCarCost(d) {
    let cost = 40 * d
    if (d >= 7){
      return cost - 50
    }else if (d >= 3){
      return cost - 20
    } else return cost 
  }