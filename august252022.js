function multiTable(number) {
    let res = '';
    
    for(let i = 1; i <=10; i ++){
      let ans = i * number;
      res += `${i} * ${number} = ${ans}\n`;
    }
    return res.trim("\n");
  }