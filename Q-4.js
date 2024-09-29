//4. Iterate through the array using a while loop and print each element

//Why use while loop?
//A while loop works well here since we can control the condition based on the array's length.
//The loop keeps running as long as the index is within the bounds of the array. 
//This is an alternative to a for loop and demonstrates how we can achieve the same result in a different way.

let array =[4, 15, 23, 42, 8, 16];
let index = 0;

while (index <array.length) {
    console.log(array[index]);
    index++;
}