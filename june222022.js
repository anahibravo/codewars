//create a class for ship, so that each ship that comes through gets the same properties
class Ship {
    constructor(draft,crew){
       this.draft = draft;
       this.crew = crew;
    }
   //create the method that will find out if it's worth to boot
    isWorthIt(){
      return this.draft - this.crew * 1.5  > 20;
    }
   }