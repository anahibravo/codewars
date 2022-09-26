function converter (mpg) {
    let kilometersPerL =  1.609344 / 4.54609188 
    let answer = mpg * kilometersPerL
    return Number(answer.toFixed(2))
  }