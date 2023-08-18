function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
 
    let shark = sharkDistance/sharkSpeed
    let you = pontoonDistance/youSpeed
    
    if (dolphin == true ){
      shark = shark * 2
   }
    if ( you < shark){
      return "Alive!"
    }
    else return "Shark Bait!"
  }