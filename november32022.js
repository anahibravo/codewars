function changeMe(moneyIn){
    let five = '20p '.repeat(25).trim()
    let two = '20p '.repeat(10).trim()
    let one = '20p '.repeat(5).trim()
    let fiftyp = '20p 20p 10p'
    let twentyp = '10p 10p'
    
    //console.log()
    if ( moneyIn === '£5'){
      return five
    }else if ( moneyIn === '£2'){
      return two
    }else if ( moneyIn === '£1'){
      return one
    }else if ( moneyIn === '50p'){
      return fiftyp
    }else if ( moneyIn === '20p'){
      return twentyp
    }else return moneyIn
  }