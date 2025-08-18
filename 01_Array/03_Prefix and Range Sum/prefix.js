const arr = [1, 2, 3, 4];

// Loop Approach
const loopPrefix = [];
loopPrefix[0] = arr[0];

for (let i = 1; i < arr.length; i++) {
    loopPrefix[i] = loopPrefix[i - 1] + arr[i];
}
console.log(loopPrefix);

// Map approach
let sum = 0;
const mapPrefix = arr.map(value => sum += value);
console.log(mapPrefix);
