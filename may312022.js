//Tried this one first, I got stuck on the NAN part
    /*arr.sort().reverse();
     // console.log(newArr)
      let sum = 0;
    for (let i = 0; i < arr.length - 1; ++i) {
        sum += arr[i] - arr[i + 1];
      }
      console.log(sum) */

function sumOfDifferences(arr) {
   //had to set a conditional for the if the array or empty or has one element the result should be 0
    if (arr.length < 2){
        return 0
    }
    //arrange the array in descending order
    arr.sort((a,b) => b - a);
    console.log (arr)
   // run a for loop through each element 
    let sum = 0;
    let dif = 0
    for (let i=0; i< arr.length-1; i++){
      //get the difference from each consecutive pair
        dif = arr[i] - arr[i+1];
       //add the difference
        sum += dif
      return sum
      }
    }
    
    
    //this is the right answer
    /*
    function sumOfDifferences(arr) {
  //create empty array variable
 let sum = 0;
 //sort 
 let sortedArray = arr.sort(function(a, b){return b-a})
// pair and subtract
for ( let i = 0; i < (sortedArray.length - 1); i++) {
    sum += sortedArray[i] - sortedArray[i + 1]
  } return sum 
} 
    */