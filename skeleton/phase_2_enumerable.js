// Again, monkey-patch the following methods to the Array class using swell new language we've been learning.
//


// Array#myEach(callback) - receives a callback function and executes the callback for each element in the array
// Note that JavaScript's forEach function has no return value (returns undefined)
function printAddOne (num) {
  console.log(num + 1);
}

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++){
    callback(this[i]);
  }
};


// Array#myMap(callback) - receives a callback function, returns a new array of the results of calling the callback function on each element of the array
// should use myEach and a closure

function returnAddOne (num) {
  return (num + 1);
}

Array.prototype.myMap = function(callback) {
  let new_arr = [];
  this.myEach(el => new_arr.push(callback(el)));
  return new_arr;
};

// Array#myReduce(callback[, initialValue]) - (like Ruby's Array#inject) receives a callback function, and optional initial value, returns an accumulator by applying the callback function to each element and the result of the last invocation of the callback (or initial value if supplied)
// initialValue is optional and should default to the first element of the array if not provided

function addTwoNums(num1, num2) {
  return num1 + num2;
}

function multiplyTwoNums(num1, num2) {
  return num1 * num2;
}

Array.prototype.myReduce = function(callback, initialValue) {
  let acc;
  if (initialValue === undefined) {
    acc = this.shift();
  } else {
    acc = initialValue;
  }
  this.myEach( el => acc = callback(acc, el) );

  return acc;
};
