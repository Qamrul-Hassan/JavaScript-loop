//4. Iterate through the array using a while loop and print each element

//Why use while loop?
//A while loop works well here since we can control the condition based on the array's length.
//The loop keeps running as long as the index is within the bounds of the array. 
//This is an alternative to a for loop and demonstrates how we can achieve the same result in a different way.

let array =[4, 15, 23, 42, 8, 16]; // This initializes an array with 6 numbers.
let index = 0;                     // This initializes a variable `index` and sets it to 0.

while (index <array.length) {      // This starts a `while` loop that will run as long as `index` is less than the length of the array.
    console.log(array[index]);     // Inside the loop, it prints the element at the current `index`.
    index++;                       // After printing the element, `index` is incremented by 1.
}