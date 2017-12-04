var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var newIntegers = integers.sort(function(first, second) {return second-first}).filter(function(x) {return x < 19}).map(function(x) {return x * 1.5 - 1});

console.log(newIntegers);




// Then output (either in the DOM or the console) the sum of all the resulting numbers.

