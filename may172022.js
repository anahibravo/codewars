function arrayPlusArray(arr1, arr2) {
    const newarray = arr1.concat(arr2);
     //console.log(newarray)<<<< this worked
     return newarray.forEach(e => e + e)
     //trying to do a forEach of the new array and add them together but I think I went wrong making them into a string...?
   }
   