/* 
First asking to find average of the class points array
-iterate through the array with a loop find the average
Asking for a conditional 

compare both parameters 

*/

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
  let total = 0;
  for(let i = 0; i < classPoints.length; i++) {
      total += classPoints[i];
  }
   let avg = total / classPoints.length;
  console.log(avg)
    if (yourPoints > avg){
      return true;
    }else{
      return false;
    } 
  }