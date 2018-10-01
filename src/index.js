module.exports = function getZerosCount(number) {
  var result = 0;
  var fivesCount = 0;
  for (let currentNumber = 5; currentNumber < number; currentNumber++) {
    fivesCount = fivesCount + getCount(currentNumber);
  }

  result = fivesCount;

  return result;
}

function getCount(number) {
  var count = 0;
  var reminder = 0;
  var mult = 5;
  while(reminder == 0) {
    reminder = number % mult;
    if (reminder == 0) {
      count++;
      mult = mult * 5;
    }
  }  

  return count;
}

//module.exports(84583674);
