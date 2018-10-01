module.exports = function getZerosCount(number) {
  var result = 0;
  var fivesCount = 0;

  fivesCount = fivesCount + getCount(number);  

  result = fivesCount;

  return result;
}

function getCount(number) {
  var count = 0;
  
  for (var i = 5; number / i >= 1; i *= 5) 
        count = count + Math.floor(number / i); 

  return count;
}
