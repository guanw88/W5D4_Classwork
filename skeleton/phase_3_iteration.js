// Array#bubbleSort - receives an array, returns a sorted array by implementing bubble sort sorting algorithm

Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < this.length-1; i++) {
      if (this[i] > this[i+1]) {
        sorted = false;
        let val = this[i];
        this[i] = this[i+1];
        this[i+1] = val;
      }
    }
  }
  console.log("hello");
  return this;
};

// not working version

// Array.prototype.bubbleSort = function() {
//   let sorted = false;
//   while (sorted === false) {
//     let new_arr = this.slice();
//     for (let i = 0; i < this.length-1; i++) {
//       if (this[i] > this[i+1]) {
//         sorted = false;
//         let val = this[i];
//         this[i] = this[i+1];
//         this[i+1] = val;
//       }
//     }
//     debugger;
//     if (this === new_arr) {
//       sorted = true;
//     }
//   }
//   console.log("hello");
//   return this;
// };

// [5,8,2,4,1,3]

// String#substrings - receives a string, returns an array of all substrings

String.prototype.substrings = function() {
  let result_arr = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let len = 0; len < this.length - i; len++ ) {
      result_arr.push(this.slice(i, i+len+1));
    }
  }
  return result_arr.uniq();
};
