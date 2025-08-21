const arr = [5, 1, 7, 4, 2, 10, 9, 3, 6, 8];
for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let index = i;
    for (let j = i; j < arr.length; j ++) {
        if (min > arr[j]) {
            min = arr[j];
            index = j;
        }
    }
    arr[index] = arr[i];
    arr[i] = min;

    /* 
    Suggestion from GPT:
    [arr[i], arr[index]] = [arr[index], arr[i]];, intead of the manual swap.
    */
}
console.log(arr);