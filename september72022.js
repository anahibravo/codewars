function dutyFree(normPrice, discount, hol){
    let totalDiscount = normPrice * discount / 100
    //console.log (totalDiscount)
    return Math.floor( hol / totalDiscount)
    }