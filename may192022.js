/*
The present sheep should be accounted for
the amount of trues should be returned filtered out from the false
returned into a number

filter throught the array with .filter method
the parameter will be true and I also have to check for null 
or undefiened values
then add a conditional that will return true if it equals to true
and it will add it using the .length condition
*/

function countSheeps(arrayOfSheep) {
    const presentSheep = arrayOfSheep.filter(n => {
      if (n === true){
        return true;
      }
        return false
      
    }).length
  return presentSheep
}
