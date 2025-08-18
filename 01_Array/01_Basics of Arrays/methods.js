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

// Array Length
console.log(arr.length); // 4

// Array to String
console.log(arr.toString()); // 1,2,three,four

// Array at()
console.log(arr.at(2)); // three

// Array join()
console.log(arr.join(" - ")); // 1 - 2 - three - four

// Array delete()
delete arr[0];
console.log(arr); // [ <1 empty item>, 2, 'three', 'four' ]

// Array concat()
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const nums = num1.concat(num2);
console.log(nums); // [ 1, 2, 3, 4, 5, 6 ]

// Array copyWithin()
const names = ["James", "Michael", "Juan", "Dela Cruz"];
// Copy to index 2, all elements from index 0:
console.log(names.copyWithin(2, 0)); // [ 'James', 'Michael', 'James', 'Michael' ]

// Copy to index 2, the elements from index 0 to 2:
names.push("Random");
console.log(names.copyWithin(2, 0, 2)); // [ 'James', 'Michael', 'James', 'Michael', 'Random' ]

// Array flat()
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.flat();
console.log(flat); // [ 1, 2, 3, 4, 5, 6 ]

/* Splicing and Slicing
   The splice() method adds new items to an array.
   The slice() method slices out a piece of an array.
*/

const samples = [1, 2, 5, 6];
console.log(samples); // [ 1, 2, 5, 6 ]

/* Splice
   - splice(start)
   - splice(start, deleteCount)
   - splice(start, deleteCount, item1)
   - splice(start, deleteCount, item1, item2...)
*/
samples.splice(2, 0, 3, 4);
// (where to add, number of elements to delete, elements to add...)
console.log(samples); // [ 1, 2, 3, 4, 5, 6 ]

/* Slice
   - slice()
   - slice(start)
   - slice(start, end)

   // The numbers inside the () indicate the position of the element.
*/
const sliced1 = samples.slice(3);
console.log(sliced1); // [ 4, 5, 6 ]

const sliced2 = samples.slice(1, 3);
console.log(sliced2); // [ 2, 3 ]

/* Array Search Methods
   - Array indexOf()
   - Array lastIndexOf()
   - Array includes()
   - Array find()
   - Array findIndex()
   - Array findLast()
   - Array findLastIndex()
*/

// Array Sort Methods
/* [Alphabetic Sort]
   - Array sort()
   - Array reverse()
   - Array toSorted()
   - Array toReversed()
   - Sorting Objects
*/

/* Numeric Sort
   - Numeric Sort
   - Random Sort
   - Math.min()
   - Math.max()
   - Home made Min()
   - Home made Max()
*/