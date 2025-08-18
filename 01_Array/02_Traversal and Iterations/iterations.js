/* Array forEach() - (array.forEach(callbackFunction(currentValue, index, array)
   Do something for every item.
*/
const forEachSample = [1, 2, 3, 4, 5, 6];
let forEachSum = 0;
forEachSample.forEach((value, index, array) => {
    forEachSum += value;
})
console.log(forEachSum); // 21

/* Array map() - (array.map(callbackFunction(currentValue, index, array))
   Change every item into a new array.
*/
const mapSample = [1, 2, 3, 4, 5, 6];
console.log(mapSample.map((value, index, array) => value * 2)); // [ 2, 4, 6, 8, 10, 12 ]
const updatedByMap = mapSample.map((value, index, array) => value * 2);
console.log(updatedByMap); // [ 1, 2, 3, 4, 5, 6 ]

/* Array filter() - (array.filter(callbackFunction(currentValue, index, array))
   Keep only the items you want.
*/
const filterSample = [1, 2, 3, 4, 5, 6];
const even = filterSample.filter((value, index, array) => value % 2 == 0);
console.log(even); // [2, 4, 6]

/* Array reduce()
   array.reduce((previousValue, currentValue, index, array) => {
     // return something
   }, initialValue);

   Combine all items into one value.

   Array reduceRight() works from right-to-left.
*/ 
const reduceSample = [1, 2, 3, 4, 5, 6];
const reduceSum = reduceSample.reduce((total, value, index, array) => {
    return total + value;
}, 0);
console.log(reduceSum); // 21

// every() method checks if all array values pass a test.
// some() method checks if some array values pass a test.
// from() method returns an Array object from any iterable object/any object with a length property.
// keys() method returns an Array Iterator object with the keys of an array.
// with() method as a safe way to update elements in an array without altering the original array.

// spread [...arr1, arr2] operator expands an array into individual elements.
// Math.min(...nums) and Math.max(...nums);
const nums = [1, 2, 3, 4, 5, 6];
console.log(Math.min(...nums)); // 1
console.log(Math.max(...nums)); // 6

// rest operator (...) allows us to destruct an array and collect the leftovers.
const [num1, num2, ...rest] = nums;
console.log(num1); // 1
console.log(num2); // 2
console.log(rest); // [ 3, 4, 5, 6 ]