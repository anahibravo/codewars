function find_average(array) {
    if (array.length === 0){
      return 0
    } else 
      return array.reduce((a,b) => (a + b)) / array.length;
     }