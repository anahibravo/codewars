function chromosomeCheck(sperm) {
    if (sperm === "XY"){
      return  "Congratulations! You're going to have a son."
     }else {
         return "Congratulations! You're going to have a daughter."
     }
   }
     
     /*
    I thought I had to do a filter for this function so I tried it first like this
    then I realized all I had to do was an if statement

    this is my attempt:
     return sperm.filter(n => n.length === 'XY'){
        "Congratulations! You're going to have a son."
     }else
         return "Congratulations! You're going to have a daughter."
     }
   }
     
   this is the function I thought of that I had used before
   function friend(friends){
       return friends.filter(n => n.length === 4)
   }
   
   */