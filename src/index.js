module.exports = function getZerosCount(number) {
  var result = 0;
  var twosCount = 0;
  var fivesCount = 0;
  for (let currentNumber = 2; currentNumber < number; currentNumber++) {
    fivesCount = fivesCount + getCount(currentNumber, 5);
  }

  result = fivesCount;

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

function getTwosCount(number) {
  var binStr = number.toString(2);
  var zeroCount = 0;
  for (let i = binStr.length - 1; i > 0; i--) {
    var char = binStr[i];
    if (char == "0")
    {
      zeroCount++;
    }
    else {
      break;
    }
  }

  return zeroCount;
}


function getFivesCount(number) {
  var binStr = number.toString(5);
  var zeroCount = 0;
  for (let i = binStr.length - 1; i > 0; i--) {
    var char = binStr[i];
    if (char == "0")
    {
      zeroCount++;
    }
    else {
      break;
    }
  }

  return zeroCount;
}
