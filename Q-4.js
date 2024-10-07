/* 4. Iterate through the array using a while loop and print each element

Why use while loop?
    A while loop works well here since we can control the condition based on the array's length.
    The loop keeps running as long as the index is within the bounds of the array. 
    This is an alternative to a for loop and demonstrates how we can achieve the same result in a different way.*/

let array =[4, 15, 23, 42, 8, 16]; // This initializes an array with 6 numbers.
let index = 0;                     // This initializes a variable `index` and sets it to 0.

while (index <array.length) {      // This starts a `while` loop that will run as long as `index` is less than the length of the array.
    console.log(array[index]);     // Inside the loop, it prints the element at the current `index`.
    index++;                       // After printing the element, `index` is incremented by 1.
}


/*Step-by-Step Explanation:
1. Array Initialization:
javascript

let array = [4, 15, 23, 42, 8, 16];
What it does: This line creates an array named array that contains six elements: 4, 15, 23, 42, 8, and 16.
Purpose: The array stores the values that you want to access and print.
2. Index Initialization:
javascript

let index = 0;
What it does: This line initializes a variable index and sets it to 0.
Purpose: The index variable will be used to keep track of the current position in the array as the loop iterates through it.
3. While Loop:
javascript

while (index < array.length) {
What it does: This line starts a while loop that continues executing as long as index is less than the length of the array (array.length).
The length of the array is 6 since there are six elements.
Purpose: This condition allows the loop to run through all the elements of the array, ensuring that it accesses each one without going out of bounds.
4. Printing Array Elements:
javascript

console.log(array[index]);
What it does: Inside the loop, this line prints the element at the current index of the array to the console.
Purpose: This allows you to see each value in the array as the loop iterates. For example:
When index = 0, it prints array[0], which is 4.
When index = 1, it prints array[1], which is 15, and so on.
5. Incrementing Index:
javascript
C
index++;
What it does: This line increments the value of index by 1 after each iteration of the loop.
Purpose: This is essential for moving to the next element in the array. If this line were omitted, the loop would get stuck at the first index (0), causing an infinite loop.
Loop Execution Flow:
First Iteration (index = 0):

Condition: 0 < 6 (true), prints 4.
Increment: index becomes 1.
Second Iteration (index = 1):

Condition: 1 < 6 (true), prints 15.
Increment: index becomes 2.
Third Iteration (index = 2):

Condition: 2 < 6 (true), prints 23.
Increment: index becomes 3.
Fourth Iteration (index = 3):

Condition: 3 < 6 (true), prints 42.
Increment: index becomes 4.
Fifth Iteration (index = 4):

Condition: 4 < 6 (true), prints 8.
Increment: index becomes 5.
Sixth Iteration (index = 5):

Condition: 5 < 6 (true), prints 16.
Increment: index becomes 6.
Seventh Iteration (index = 6):

Condition: 6 < 6 (false), so the loop terminates.
Output:
The final output of the program will be:


4
15
23
42
8
16
Summary:
The code uses a while loop to iterate through each element in the array.
It prints the value of each element one by one until all elements have been accessed.
The variable index controls the current position in the array and ensures that all elements are printed without going out of bounds. */