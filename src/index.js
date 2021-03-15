
exports.min = function min (array) {
  let minVal = 0;
  for (let i=0; i < array.length; i++) {
    
    if (minVal > array[i]) {
       minVal = array[i];
    }else if (array.length == 0) {
      minVal = 0;
    }
    
}
return minVal;
}

exports.max = function max (array) {
  let maxVal = 0;
  const length = array.length;
  for (let i=0; i < length; i++) {
    
    if (maxVal < array[i]) {
       maxVal = array[i];
    } else if (length === 0)  {
      return 0;
    }
    
  }
return maxVal;
}

exports.avg = function avg (array) {
  let j = 0;
  for (let i=0; i < array.length; i++) {
    j += array[i];
       if (array.length == 0){
        return 0;
       }
  
}
return j/array.length;
}
