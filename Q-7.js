
/*7. Print numbers in reverse order from 20 to 1 using a while loop

Why use while loop?
    A while loop is useful here because it allows you to start at 20 and decrement on each iteration. 
    The loop continues until it reaches 1. 
    It's a good way to demonstrate how while loops can be used for counting downwards as well as upwards.*/

let n = 20;              // Initialize n to 20
while (n >= 1) {        // Start a while loop that continues as long as n is greater than or equal to 1
    console.log(n);      // Print the current value of n
    n--;             // Decrement `n` to move to the next lower number
}




Let’s break down the provided code step by step to understand how it works and what it accomplishes.

Code:
javascript
Copy code
let n = 20;                  // Initialize n to 20
while (n >= 1) {            // Start a while loop that continues as long as n is greater than or equal to 1
    console.log(n);         // Print the current value of n
    n--;                     // Decrement n to move to the next lower number
}




/*Step-by-Step Explanation:
1. Variable Initialization:
javascript

let n = 20;
What it does: This line initializes a variable n and sets its initial value to 20.
Purpose: This variable will be used to track the current number being printed in the loop.
2. While Loop:
javascript

while (n >= 1) {
What it does: This line starts a while loop that continues executing as long as n is greater than or equal to 1.
Purpose: This condition allows the loop to print numbers starting from 20 down to 1.
3. Print Statement:
javascript

console.log(n);
What it does: This line prints the current value of n to the console during each iteration of the loop.
Purpose: This allows you to see the value of n as it counts down.
4. Decrementing n:
javascript

n--;
What it does: This line decrements the value of n by 1.
Purpose: This is essential for moving the loop to the next lower number. Without this line, the loop would get stuck at 20, resulting in an infinite loop.
Loop Execution Flow:
First Iteration (n = 20):

Condition: 20 >= 1 (true), prints 20.
Decrement: n becomes 19.
Second Iteration (n = 19):

Condition: 19 >= 1 (true), prints 19.
Decrement: n becomes 18.
This continues until n reaches 1:

Last Iteration (n = 1):
Condition: 1 >= 1 (true), prints 1.
Decrement: n becomes 0.
Exit Condition:

When n becomes 0, the condition 0 >= 1 is no longer true, and the loop terminates.
Output:
The output of the program will be:


20
19
18
17
16
15
14
13
12
11
10
9
8
7
6
5
4
3
2
1
Summary:
The code uses a while loop to iterate from 20 down to 1.
Each number is printed before n is decremented, allowing for a countdown effect.
The loop terminates when n is no longer greater than or equal to 1, successfully printing all integers from 20 to 1.

*/



