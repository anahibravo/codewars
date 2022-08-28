const areaOrPerimeter = function(l , w) {
    let recPeri = 2 * (l + w)
    let squArea = l * w
    if ( l != w ){
      return recPeri
    }else return squArea
  };