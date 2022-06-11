function stairsIn20(s){
    //created this variable to store the the result
    let sum = 0;
    //use a for loop to iterate through the array
    for (let i = 0; i < s.length; i++) {
      sum += s[i];
  }
  return sum * 20
    }

/*
the actual answer

function stairsIn20(s){
  let stairs = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      stairs += s[i][j];
    }
  }
  return stairs * 20;
}


*/