const arr = [5, 1, 7, 4, 2, 10, 9, 3, 6, 8];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);

/* 
const arr = [5, 1, 7, 4, 2, 10, 9, 3, 6, 8];

for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
            swapped = true;
        }
    }
    if (!swapped) break; // stop if already sorted
}
console.log(arr); // [1,2,3,4,5,6,7,8,9,10]

It will only stop when no swaps occur inside the inner loop.
If swapped remains false, then the loop will break.
*/