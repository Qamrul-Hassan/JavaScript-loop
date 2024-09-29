/* 2. Print all even numbers from 2 to 100 using a for loop

Why use for loop?
     # The for loop is the most efficient here because we know exactly how many iterations are needed (starting at 2 and going up to 100). 
    The loop increments by 2 on each iteration, only targeting even numbers, and the structure of for makes it concise. */

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}



Let’s break down the provided code step by step to understand how it works and what it accomplishes.

Code:
javascript
Copy code
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}




/*Step-by-Step Explanation:
1. For Loop Initialization:
javascript
Copy code
for (let i = 2; i <= 100; i += 2) {
Initialization:

let i = 2; initializes the loop variable i to 2.
This is the starting point of the loop, and it indicates that the loop will begin with the first even number, 2.
Condition:

i <= 100; is the condition that keeps the loop running. The loop will continue executing as long as i is less than or equal to 100.
This ensures that the loop will include the number 100 if it is reached.
Increment:

i += 2 increases the value of i by 2 after each iteration of the loop.
This means that the loop will only iterate over even numbers (2, 4, 6, ...).
2. Loop Execution:
First Iteration (i = 2):

The loop checks if 2 <= 100 (true), so it enters the loop body.
console.log(i); prints 2.
Second Iteration (i = 4):

The loop increments i to 4 (2 + 2).
The loop checks if 4 <= 100 (true) and prints 4.
Subsequent Iterations:

This process continues, with i taking on the values 6, 8, 10, ..., all the way up to 100.
Each time, it checks the condition, and if true, it prints the current value of i.
Last Iteration (i = 100):

The loop checks if 100 <= 100 (true), prints 100.
After this, i will be incremented to 102.
Exit Condition:

When i reaches 102, the loop checks the condition 102 <= 100 (false), and the loop terminates. */