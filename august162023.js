function giveMeFive(obj){
    let newarr = [];
    for (let key in obj){
      if (key.length === 5) newarr.push(key);
      if (obj[key].length === 5) newarr.push(obj[key]);
      
    }
    return newarr;
  }