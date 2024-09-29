/* 1. Print all odd numbers between 1 and 50 using a while loop

Why use while loop?
    A while loop is useful when the number of iterations isn't predetermined. In this case, we are iterating through numbers between 1 and 50, and checking for a condition (odd numbers). 
    A while loop keeps checking the condition (num <= 50) and runs until it becomes false. */

let num = 1;                  // Initialize num to 1
while (num <= 50) {          // Start a while loop that continues as long as num is less than or equal to 50
    if (num % 2 !==0) {     // Check if num is odd (not divisible by 2)
        console.log(num);  // If num is odd, print it to the console
    }
    num++;              // Increment num by 1
}


/*Step-by-Step Explanation:
1. Variable Initialization:
javascript

let num = 1;
What it does: This line initializes a variable num and sets its initial value to 1.
Purpose: num will be used to track the current number being evaluated in the loop.
2. While Loop:
javascript

while (num <= 50) {
What it does: This line starts a while loop that will continue to execute as long as num is less than or equal to 50.
Purpose: The loop allows the program to iterate through all integers from 1 to 50.
3. If Condition:
javascript

if (num % 2 !== 0) {
What it does: This condition checks if num is not divisible by 2. The % operator (modulus) returns the remainder of the division of num by 2.
If num % 2 equals 0, then num is even; otherwise, it is odd.
Purpose: To determine whether the current number num is odd.
4. Print Odd Numbers:
javascript

console.log(num);
What it does: If the condition in the if statement is true (meaning num is odd), this line executes.
Purpose: This prints the current value of num to the console. For example, if num is 1, it will print 1. If num is 3, it will print 3, and so on.
5. Incrementing num:
javascript

num++;
What it does: This line increments the value of num by 1.
Purpose: This ensures that the loop progresses to the next integer. Without this line, the loop would get stuck on the same number, resulting in an infinite loop.
6. Loop Execution:
First iteration (num = 1):
The loop checks 1 <= 50 (true), then checks 1 % 2 !== 0 (true), and prints 1.
Second iteration (num = 2):
The loop checks 2 <= 50 (true), then checks 2 % 2 !== 0 (false), so it does not print anything.
Third iteration (num = 3):
The loop checks 3 <= 50 (true), then checks 3 % 2 !== 0 (true), and prints 3.
This continues until num reaches 51. At that point:

The loop checks 51 <= 50 (false), and the loop terminates. */



