function warnTheSheep(queue) {
    // we will find the index of wolf first 
      const wolfIndex = queue.indexOf('wolf')
    //find the index of the sheep
      const sheepIndex = queue.length - wolfIndex-1
      
     //conditional to find out if it's index is at the end the
      if (wolfIndex === queue.length-1){
          return "Pls go away and stop eating my sheep"
     // find the index of the wolf and the sheep 
      }else {
      // we should return the message
        return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`
      }
    
    }
    /*
    If the wolf is at the end of the array return leave my sheep alone
    if it's near a sheep you have count where in the array and make sure you tell
    the sheep next to it that it's in danger
    
    I definitely have to use an array method that goes through each element
    of to find where the wolf is at, and use a conditional that will
    return what it should say depending on where the wolf is
    
    i can use .length-1 if it's a the front of the queu which is the end of the array
    .map to go through each element...?
    .forEach can work here too
    
    
    */