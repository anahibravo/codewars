function arrayPlusArray(arr1, arr2) {
    const newarray = arr1.concat(arr2);
     //console.log(newarray)
     return newarray.reduce((prev, curr) => prev + curr)
     
   }