/* 6. Print numbers from 1 to 20 but skip numbers divisible by 4 using a while loop

    Why use while loop with continue?
    The while loop runs through numbers from 1 to 20, 
    but the continue statement helps to skip certain numbers (in this case, numbers divisible by 4). 
    This shows how to selectively skip iterations without stopping the loop entirely. */

let n = 1 ;
while (n <= 20) {
    if (n % 4 === 0) {   // Check if the number is divisible by 4
        n++;            // If divisible by 4, increment `n` and skip this iteration
        continue;       // Skip the rest of the loop and go to the next iteration
    }
    console.log(n);     // If not divisible by 4, print the number
    n++;                // Increment `n` for the next iteration
}



/* Step-by-Step Explanation:
1. Variable Initialization:
javascript

let n = 1;
What it does: This line initializes a variable n with the value 1.
Purpose: This variable will be used to keep track of the current number being evaluated in the loop.
2. While Loop:
javascript

while (n <= 20) {
What it does: This line starts a while loop that will continue executing as long as n is less than or equal to 20.
Purpose: This allows the loop to iterate through numbers from 1 to 20.
3. If Condition (Checking divisibility by 4):
javascript

if (n % 4 === 0) {
What it does: This condition checks if n is divisible by 4. The expression n % 4 calculates the remainder when n is divided by 4.
Purpose: If n is divisible by 4, the condition evaluates to true.
4. Increment and Continue:
javascript

n++;
continue;
What it does:
n++: If the number is divisible by 4, it increments n to move to the next number.
continue: This statement causes the loop to skip the remaining code in the current iteration and immediately move to the next iteration of the loop.
Purpose: This skips printing any number that is divisible by 4.
5. Print the Number:
javascript

console.log(n);
What it does: If the if condition is false (meaning n is not divisible by 4), this line prints the current value of n.
Purpose: This allows you to see the values of n that are not divisible by 4.
6. Incrementing n:
javascript

n++;
What it does: After printing the value, this line increments n by 1 for the next iteration of the loop.
Purpose: This moves the loop to the next number.
Loop Execution Flow:
First Iteration (n = 1):

1 % 4 === 0 (false), prints 1, increments n to 2.
Second Iteration (n = 2):

2 % 4 === 0 (false), prints 2, increments n to 3.
Third Iteration (n = 3):

3 % 4 === 0 (false), prints 3, increments n to 4.
Fourth Iteration (n = 4):

4 % 4 === 0 (true), increments n to 5 and skips printing.
Fifth Iteration (n = 5):

5 % 4 === 0 (false), prints 5, increments n to 6.
This process continues until n reaches 21.

Summary of Output:
The output of the program will be all numbers from 1 to 20, except those divisible by 4:


1
2
3
5
6
7
9
10
11
13
14
15
17
18
19
21
Key Points:
The while loop iterates from 1 to 20.
Numbers divisible by 4 are skipped due to the continue statement, which moves the loop directly to the next iteration.
All other numbers are printed normally.
*/




