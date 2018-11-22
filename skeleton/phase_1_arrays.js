// Monkey-patch the following methods to the Array class. Remember, we want to use prototype here.
//
// Array#uniq - returns a new array containing only the unique elements of the original array
// the unique elements should be in the order in which they first appear
// should not mutate the original array

// Array#twoSum - returns an array of position pairs where the elements sum to zero

Array.prototype.uniq = function() {
  let new_arr = [];
  for (let i = 0; i < this.length; i++) {
    if (new_arr.includes(this[i])) {
      continue;
    } else {
      new_arr.push(this[i]);
    }
  }
  return new_arr;
};


Array.prototype.twoSum = function() {
  let new_arr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if ((this[i] === -1 * this[j]) && (i < j) ){
        new_arr.push([i,j]);
      }
    }
  }
  return new_arr;
};

// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// should not mutate the original array

Array.prototype.transpose = function() {
  let new_arr = [];
  for (let i = 0; i < this.length; i++) {
    let temp_arr = [];
    for (let j = 0; j < this[0].length; j++) {
      temp_arr.push(this[j][i]);
    }
    new_arr.push(temp_arr);
  }
  return new_arr;
};
