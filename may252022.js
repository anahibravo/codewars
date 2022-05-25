/*
first we check if human years are greater than 2, if they are then we take 9 (the value of the second year) and the remaining years we multiply by 4 for the cat and 5 for the dog

if human years are equal to 2 then just add the 9 if it's equal to 1 then we don't add anything

*/ 

var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
   return [humanYears, (15 + ((humanYears >2)? (9+(humanYears-2)*4) : humanYears == 2 ? 9: 0)), (15 + ((humanYears >2)? (9+(humanYears-2)*5) : humanYears == 2 ? 9: 0))];
  }