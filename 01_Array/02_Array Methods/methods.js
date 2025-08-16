// Add and Delete Array Elements
const arr = [1, 2, "three", "four"];
console.log(arr); // [ 1, 2, 'three', 'four' ]
arr.push(5);
console.log(arr); // [ 1, 2, 'three', 'four', 5 ]
arr.pop();
console.log(arr); // [ 1, 2, 'three', 'four' ]
arr.unshift(0);
console.log(arr); // [ 0, 1, 2, 'three', 'four' ]
arr.shift();
console.log(arr); // [ 1, 2, 'three', 'four' ]