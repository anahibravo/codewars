function mergeArrays(arr1, arr2) {
    //merge both arrays
    let arr3 = arr1.concat(arr2);
    //console.log (arr3);
    //ascending order
    arr3.sort((a, b) => a - b);
    //remove the duplicates when returned
    let newarr = arr3.filter((c, index) => {
      return arr3.indexOf(c) === index;
  });
    //return outside of anything because of scope 
    return newarr
  }