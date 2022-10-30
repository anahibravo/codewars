function basicOp(operation, value1, value2){
    let add = value1 + value2
    let minus = value1 - value2
    let times = value1 * value2
    let divide = value1 / value2
    
    if (operation == '-'){
      return minus
    }else if (operation == '+'){
      return add
    }else if (operation == '*'){
      return times
    }else return divide
  }