/* 3. Calculate the sum of the elements in the array using a for loop

Why use for loop?
    A for loop is perfect here because we want to iterate over each element in the array. 
    The loop runs from the start (i = 0) to the end (arr.length). 
    This allows us to sum the numbers by accessing each element by index (arr[i]).*/

let arr = [3, 8, 12, 5, 9];                 // Initializes an array of numbers.
let sum = 0 ;                                // Initializes a variable to store the total sum of the numbers.

for (let i = 0; i  < arr.length; i++) {
    sum += arr[i];                          // Adds the current number to the sum.
}
console.log(sum);                           // Prints the final sum to the console.



/*Step-by-Step Explanation:
1. Array Initialization:
javascript

let arr = [3, 8, 12, 5, 9];
What it does: This line creates an array named arr that contains the numbers 3, 8, 12, 5, and 9.
Purpose: The array holds the values that you want to sum.
2. Sum Initialization:
javascript

let sum = 0;
What it does: This line initializes a variable called sum and sets it to 0.
Purpose: The sum variable will be used to accumulate the total of the numbers in the array as we iterate through them.
3. For Loop:
javascript

for (let i = 0; i < arr.length; i++) {
What it does: This line starts a for loop that initializes i to 0 and continues to run as long as i is less than the length of the array (arr.length).
Purpose: The loop will iterate through each element of the array, allowing you to access each number by its index.
4. Adding to the Sum:
javascript

sum += arr[i];
What it does: This line adds the current element in the array (indexed by i) to the sum variable.
Equivalent to: sum = sum + arr[i];
Loop Execution:

First iteration (i = 0):
sum = 0 + arr[0] → sum = 0 + 3 → sum = 3.
Second iteration (i = 1):
sum = 3 + arr[1] → sum = 3 + 8 → sum = 11.
Third iteration (i = 2):
sum = 11 + arr[2] → sum = 11 + 12 → sum = 23.
Fourth iteration (i = 3):
sum = 23 + arr[3] → sum = 23 + 5 → sum = 28.
Fifth iteration (i = 4):
sum = 28 + arr[4] → sum = 28 + 9 → sum = 37.
5. Print the Sum:
javascript

console.log(sum);
What it does: After the loop finishes, this line prints the value of sum to the console.
Output: The output will be 37, which is the total sum of all the elements in the array.
Summary:
The code calculates the sum of the numbers in the arr array by iterating over each element using a for loop.
The variable sum accumulates the total, and after processing all elements, it prints the final sum to the console.
Final Output:
When you run this code, the output will be:


37 */