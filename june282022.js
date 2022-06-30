//first attempt
function pipeFix(numbers){
    // create an empty array in which the new array will be placed
    let newArr = []
    // create a loop starting from 0
    //the length of the loop would be numbers -1
      for (let i = numbers[0]; i <= numbers[numbers.length-1]; i++){
      //this will add en element to the end of the array depending on how long it will loop
        newArr.push (i)
      }
      return newArr
    }
    