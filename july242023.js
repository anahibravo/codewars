function countPositivesSumNegatives(input) {
    let count = 0
    let sum = 0
    
    if (input == null | input == 0){
      return [];
    }else {
      input.forEach((num) => num > 0 ? count++ : sum += num)
      }
      return [count, sum]
    }