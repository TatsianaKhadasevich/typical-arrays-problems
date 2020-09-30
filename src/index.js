
exports.min = function min (array = null) {
return  (array == null || array =='')? 0:Math.min(...array);
  
}

exports.max = function max (array = null) {
return  (array == null || array =='')? 0:Math.max(...array);
}

exports.avg = function avg (array = null) {
return  (array == null || array =='')? 0: array.reduce((sum, item) => sum + item)/array.length;
}
