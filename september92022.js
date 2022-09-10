function peopleWithAgeDrink(old) {
    if (old < 14 ){
      return 'drink toddy'
    } else if (old < 18){
      return 'drink coke'
    }else if (old <= 20 ){
      return 'drink beer'
    }else return 'drink whisky'
    console.log(old)
  }