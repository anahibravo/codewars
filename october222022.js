//return price without vat
function excludingVatPrice(price){
    if (price == undefined){
       return -1;
     }else 
       return +(price/1.15).toFixed(2)
     
   }