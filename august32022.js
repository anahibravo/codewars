function weatherInfo (temp) {
    let cel = (temp - 32) * (5/9)
    
  if ( cel >= 0){
    return `${cel} is above freezing temperature`
  }else
    return `${cel} is freezing temperature`
  }
  