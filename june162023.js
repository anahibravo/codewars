function bmi (weight, height) {
    let totalBmi = weight / height ** 2
   
  if (totalBmi <= 18.5) {
    return "Underweight";
  } else if (totalBmi <= 25.0){
    return "Normal";
  } else if (totalBmi <= 30.0) {
    return "Overweight";
  } else {
     return "Obese";
  }
  }

