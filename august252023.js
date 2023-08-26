function squareOrSquareRoot(array) {
    return array.map(x => {
      let num = Math.sqrt(x)
      return  (num % 1 === 0 ) ? num : (x*x)
      })
  }