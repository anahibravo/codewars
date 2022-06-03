var replaceDots = function(str) {
    return str.split('.').join('-');
  }
  //instead of .replace I switched it to split and then added the .join