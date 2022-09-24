function howManydays(month){
    var days;
    switch (month){
    case 4, 6, 9, 11:
        days = 30;
      break;
    case 2:
      days = 28;
      break;
    default:
        days = 31;
    }
    return days;
  }