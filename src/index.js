module.exports = function getZerosCount(number) {
  var result = 0;
  var twosCount = 0;
  var fivesCount = 0;
  for (let currentNumber = 2; currentNumber < number; currentNumber++) {
    twosCount = twosCount + getCount(currentNumber, 2);
    fivesCount = fivesCount + getCount(currentNumber, 5);
  }

  result = Math.min(twosCount, fivesCount);

  return result;
}

function getCount(number, devider) {
  var count = 0;
  var reminder = 0;
  while (reminder == 0 && number >= devider) {

    reminder = number % devider;
    if (reminder == 0) {
      count++;
    }

    number = Math.floor(number / devider);
  }

  return count;
}
