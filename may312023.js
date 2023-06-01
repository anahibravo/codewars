function splitAndMerge(str,sp){
    let words = str;
    return words.split(" ").map(index => index.split("").join(sp)).join(" ");
   }