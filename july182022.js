function getAverage(marks){
    let total = 0;
    for(let i = 0; i < marks.legth; i++){
      total += marks[i];
    }
      return Math.floor(total / marks.length);
    }
    
//this is not working telling me the expected to equal 2
//I had to look at the solutions and I found this solution
// similar to mine and it passed and I can't find the difference

function getAverage(marks){

    // calculates total number of marks
    var total = 0;
    for(var i = 0; i < marks.length; i++){
      total += marks[i];
    }
    
    /* returns total number of marks divided by number of marks
       rounded down to nearest integer */
    return Math.floor(total / marks.length);
  }
  