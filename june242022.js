function hello(name) {
    if (name === null || name.length === 0){
    return 'Hello, World!';
    } else {
   return `Hello, ${name.chartAt(0).toUppercase() + name.slice(1).toLowercase()}!`;
    }
  }
// The top is my code and the bottom is one that passed. I don't know why it says it cannot read propert 'length' of undefined
//TypeError: Cannot read property 'length' of undefined
  function hello(name) {  
    if (name == null || name.length == 0){
      return "Hello, World!";
    }
    else{       
      return `Hello, ${name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)}!`;
    }
  }