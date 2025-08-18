// Let's pretend the indeces/indexes are days, day 0, day 1, and so on.
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;
const prefix = arr.map(value => sum += value);
console.log(prefix); // [ 1,  3,  6, 10, 15, 21, 28, 36 ]

const sumOfRangeLR = (day1, day2) => {
    console.log((prefix[day1 - 1]));
    console.log(prefix[day2]);
    console.log(`We pretend that the first element is day 0's earning: (${arr})`);
    console.log(`The total earning from day ${day1} to day ${day2} is ${prefix[day2] - (day1 == 0 ? 0 : prefix[day1 - 1])}.`);
}

// Edge case where day 1 is 0. (day1 == 0 ? 0 : prefix[day1 - 1])

sumOfRangeLR(3, 6);
/* Now, we want to calculate the sum from day 3 to 6.
   The first element in the reference below is used to avoid an error.
   The prefix sum which will be the reference:
   [ (day 0),  (day 1),  6, 10, 15, 21, 28, (day 7) ]
   prefix[6] == 28
   prefix[3 - 1] == 6, 28 - 6 = 22


   Day 3 to 6, [1, 2, 3, 4, 5, 6, 7, 8]
   [4, 5, 6, 7] = 4 + 5 + 6 + 7 = 22
*/

/* Suggestion from GPT:
   let sum = 0;
   const prefix = [0, ...arr.map(v => sum += v)];

   const sumOfRangeLR = (day1, day2) => {
     const total = prefix[day2 + 1] - prefix[day1];
     console.log(`The total earning from day ${day1} to day ${day2} is ${total}.`);
   };
*/