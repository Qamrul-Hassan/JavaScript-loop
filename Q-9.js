/*9. Calculate the average of the numbers in the array using a for loop

//Why use for loop?
//The for loop iterates over each number in the array and sums them up. 
//After summing, we divide by the total number of elements to get the average. 
//This is a simple and structured way to calculate an average, 
//as it leverages the ability of the for loop to step through each element.*/

let nums = [10, 20, 30, 40, 50];            // Initializes an array of numbers.
let total = 0;                              // Initializes a variable to store the total sum of the numbers.

for (let i = 0; i < nums.length; i++) {
    total += nums[i];                       // Adds the current number to the total.
}
let average = total / nums.length;          // Calculates the average by dividing the total by the number of elements.
console.log(average);                       // Prints the average to the console.



/*Step-by-Step Explanation:
1. Array Initialization:
javascript

let nums = [10, 20, 30, 40, 50];
What it does: This line creates an array named nums containing five numbers: 10, 20, 30, 40, and 50.
Purpose: The array holds the values for which we want to calculate the average.
2. Total Initialization:
javascript

let total = 0;
What it does: This line initializes a variable total and sets it to 0.
Purpose: The total variable will be used to accumulate the sum of the numbers in the array as we iterate through it.
3. For Loop:
javascript

for (let i = 0; i < nums.length; i++) {
What it does: This line starts a for loop that initializes i to 0 and continues as long as i is less than the length of the nums array (nums.length is 5).
Purpose: The loop will iterate through each element of the array, allowing us to access each number by its index.
4. Adding to Total:
javascript

total += nums[i];
What it does: This line adds the current element in the array (indexed by i) to the total variable.
Equivalent to: total = total + nums[i];
Loop Execution:

First iteration (i = 0):
total = 0 + nums[0] → total = 0 + 10 → total = 10.
Second iteration (i = 1):
total = 10 + nums[1] → total = 10 + 20 → total = 30.
Third iteration (i = 2):
total = 30 + nums[2] → total = 30 + 30 → total = 60.
Fourth iteration (i = 3):
total = 60 + nums[3] → total = 60 + 40 → total = 100.
Fifth iteration (i = 4):
total = 100 + nums[4] → total = 100 + 50 → total = 150.
After the loop completes, total will hold the sum of all elements in the array, which is 150.

5. Calculating the Average:
javascript

let average = total / nums.length;
What it does: This line calculates the average by dividing total (which is 150) by nums.length (which is 5).
Calculation:
average = 150 / 5 → average = 30.
6. Print the Average:
javascript

console.log(average);
What it does: This line prints the value of average to the console.
Output: The output will be:

30
Summary:
The code calculates the average of the numbers in the nums array by first summing all the elements and then dividing by the number of elements in the array.
The final result of 30 is printed to the console, which is the average of the numbers 10, 20, 30, 40, and 50. */