function pointsPer48(ppg, mpg) {
    const extra = ppg / mpg * 48
    if (ppg == 0 || mpg == 0){
      return 0
    }else 
    return Number(extra.toFixed(1))
      
    }