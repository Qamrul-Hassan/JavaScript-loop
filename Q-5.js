/* 5. Write a for loop that breaks when it encounters the number 45

    Why use for loop with break?
    A for loop is ideal here as it allows counting from 1 to 100. 
    We introduce the break statement to exit the loop early when the number 45 is reached. 
    This demonstrates how to control the loop flow and exit based on a condition.*/


for (let i = 1; i <= 100; i++) {
    if (i === 45) {
        break;
    }
    console.log(i);
}


/* Step-by-Step Explanation:
1. For Loop Initialization:
javascript

for (let i = 1; i <= 100; i++) {
Initialization:
let i = 1; initializes the loop variable i to 1. This is where the loop starts.
Condition:
i <= 100; is the condition that keeps the loop running. The loop will continue executing as long as i is less than or equal to 100.
Increment:
i++ increments the value of i by 1 after each iteration of the loop. This means that i will take on the values 1, 2, 3, ..., up to 100.
2. If Condition:
javascript

if (i === 45) {
What it does: This line checks if the current value of i is equal to 45.
Purpose: If this condition is true, the code inside the block will execute.
3. Break Statement:
javascript
Copy code
break;
What it does: The break statement immediately exits the loop, regardless of the loop condition.
Purpose: If i is equal to 45, the loop will stop executing, and control will move to the first statement after the loop.
4. Print Statement:
javascript

console.log(i);
What it does: This line prints the current value of i to the console.
Purpose: This allows you to see the values of i as the loop iterates.
Loop Execution Flow:
First Iteration (i = 1):

Condition: 1 <= 100 (true), checks 1 === 45 (false), prints 1.
Second Iteration (i = 2):

Condition: 2 <= 100 (true), checks 2 === 45 (false), prints 2.
This continues for each integer until...

Forty-Fifth Iteration (i = 45):

Condition: 45 <= 100 (true), checks 45 === 45 (true), so the break statement is executed, and the loop terminates.
Summary of Output:
The output of the program will be all integers from 1 to 44 printed to the console:

python

1
2
3
4
5
...
44
Final Result:
Once the loop encounters i === 45, it executes the break statement, preventing any further iterations or prints. Therefore, 45 and any numbers after it will not be printed.
Key Points:
The for loop iterates from 1 to 100.
When i reaches 45, the loop exits early due to the break statement.
This is a common pattern used in programming to stop a loop when a certain condition is met. */