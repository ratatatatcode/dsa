/* Array is for storing data collections.
   As you can see below, it is not limited to numbers only, you can also add strings and other data types.
*/
const arr = [1, 2, "three", "four"];
console.log(arr); // [ 1, 2, 'three', 'four' ]
// Elements = 1, 2, three, four

/* What is index?
   Array starts in index 0.
   index 0/arr[0] = 1

   And that is how you access an array.
*/
console.log(arr[0]); // 0

// The length of array can grow or shrink.
// Current array value: [ 1, 2, 'three', 'four' ]
arr.push(5);
console.log(arr); // [ 1, 2, 'three', 'four', 5 ]
arr.pop();
console.log(arr); // [ 1, 2, 'three', 'four' ]
arr.unshift(0);
console.log(arr); // [ 0, 1, 2, 'three', 'four' ]
arr.shift();
console.log(arr); // [ 1, 2, 'three', 'four' ]

// Replacing the value
arr[2] = 3;
console.log(arr); // [ 1, 2, 3, 'four' ]

// Arrays are Objects
console.log(typeof(arr)); // object

// Arrays use numbers to access elements inside it.
// Objects use names to access its number.
const person = { firstName: "James", age: 21 };
console.log(person.firstName); // James

/* Array Elements Can Be Objects
   You can have arrays, functions, and objects in an array.
*/

// Array Properties and Methods
const nums = [4, 2, 1, 5, 3];
console.log(nums.length); // 5
console.log(nums.sort()); // [ 1, 2, 3, 4, 5 ]

// Accessing the last array element using ".length"
console.log(nums[nums.length - 1]); // 5

// Looping Array Elements
// Using For Loop:
console.log("For Loop:");
for (let i = 0; i < nums.length; i++){
    console.log(nums[i]);
    
    if (i == 2) {
        break;
    }
} // 1 2 3

// Using forEach: (array.forEach(callbackFunction(currentValue, index, array)))
console.log("For Each (Listing):");
nums.forEach((element) => console.log(element)); // 1 2 3 4 5

console.log("For Each (Sum):");
let sum = 0;
const sumFunc = (a, b) => a + b;
nums.forEach((num) => sum = sumFunc(sum, num));
console.log(sum);
/* First it will take the current value of the sum, which is 0.
   Then it will add the first element of the array which is 1 to 0.
   sum = sumFunc(0, num[0]); // 0 + 1
   And it will repeat the process.
*/

// Nested Arrays and Objects
const me = {
    name: "James",
    age: 18,
    favorites: [
        { brand: "Chocolate 1" },
        { brand: "Chocolate 2" },
        { brand: "Chocolate 3" }
    ]
}

for (let i in me.favorites) { // 0 -> 2
    for (let j in me.favorites[i]) {
        console.log(me.favorites[i].brand);
    }
} // Chocolate 1 Chocolate 2 Chocolate 3

const cars = [
    {
        brand: "Car 1",
        productionDate: "1992"
    },
    {
        brand: "Car 2",
        productionDate: "2000"
    },
    {
        brand: "Car 3",
        productionDate: "2022"
    }
];

cars.forEach((car) => console.log(car.brand)); // Car 1 Car 2 Car 3