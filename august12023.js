function sumOfDifferences(arr) {
    let newarr = arr.sort((a,b) => b - a);
    let sum = 0;
    for (let i = 0; i< newarr.length - 1; i++){
        sum += (newarr[i] - newarr[i + 1]);
      }
      return sum
    }