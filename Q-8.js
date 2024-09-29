/*8. Subtract all the numbers in the array starting with the first number using a for loop

//Why use for loop?
//In this scenario, a for loop is used to iterate over the array and perform subtraction for each element. 
//The loop starts from the second element (i = 1) because we already initialize the result with the first number. 
//It shows how you can accumulate a result by repeatedly applying an operation (subtraction in this case).*/

let numbers = [20, 5, 8, 10, 3];                // This initializes an array of numbers.
let result = numbers[0];                        // This initializes `result` to the first element of the array (20).

for (let i = 1; i < numbers.length; i++) {      
    result -= numbers[i];                        // Subtract the current element from `result`.
    }
    console.log(result);                        //result will be -6



    
    
    /* Step-by-Step Explanation:
    1. Array Initialization:
    javascript
  
    let numbers = [20, 5, 8, 10, 3];
    What it does: This line creates an array named numbers that contains five elements: 20, 5, 8, 10, and 3.
    Purpose: This array holds the values that will be used in the subtraction operation.
    2. Result Initialization:
    javascript
  
    let result = numbers[0];
    What it does: This line initializes a variable called result and sets it to the first element of the numbers array, which is 20.
    Purpose: The variable result will be used to accumulate the result of subtracting subsequent numbers from the initial value of 20.
    3. For Loop:
    javascript
    
    for (let i = 1; i < numbers.length; i++) {
    What it does: This line starts a for loop that initializes i to 1 and continues to run as long as i is less than the length of the numbers array (numbers.length is 5).
    Purpose: The loop will iterate over the elements of the array starting from the second element (index 1).
    4. Subtracting Elements:
    javascript
   
    result -= numbers[i];
    What it does: In each iteration of the loop, the current element of the array (indexed by i) is subtracted from result.
    Equivalent to: This line is shorthand for result = result - numbers[i].
    Loop Execution:
    
    First iteration (i = 1):
    result = 20 - numbers[1] → result = 20 - 5 → result = 15.
    Second iteration (i = 2):
    result = 15 - numbers[2] → result = 15 - 8 → result = 7.
    Third iteration (i = 3):
    result = 7 - numbers[3] → result = 7 - 10 → result = -3.
    Fourth iteration (i = 4):
    result = -3 - numbers[4] → result = -3 - 3 → result = -6.
    5. Print the Result:
    javascript
   
    console.log(result);
    What it does: After the loop finishes, this line prints the final value of result to the console.
    Final Output: The final value of result, after all subtractions, is -6.
    Summary:
    The code initializes the result with the first element of the array (20).
    It then iterates through the remaining elements (5, 8, 10, 3), subtracting each from result.
    After all subtractions, the final output is -6, which is printed to the console.
    Final Output:
    When you run this code, the output will be:
    
    diff
    
    -6
    This value represents the result of the following calculation:
    
  
    20 - 5 - 8 - 10 - 3 = -6 */
    
    
    
    
    
    