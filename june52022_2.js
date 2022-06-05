function doubleChar(str) {
    // Your code here
    const newstr = str.split("").map(char => char + char).join("")
    return newstr
    
    //console.log(newstr)
  }