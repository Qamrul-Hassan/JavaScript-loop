//8. Subtract all the numbers in the array starting with the first number using a for loop

//Why use for loop?
//In this scenario, a for loop is used to iterate over the array and perform subtraction for each element. 
//The loop starts from the second element (i = 1) because we already initialize the result with the first number. 
//It shows how you can accumulate a result by repeatedly applying an operation (subtraction in this case).

let numbers = [20, 5, 8, 10, 3];                // This initializes an array of numbers.
let result = numbers[0];                        // This initializes `result` to the first element of the array (20).

for (let i = 1; i < numbers.length; i++) {      
    result -= numbers[i];                        // Subtract the current element from `result`.
    }
    console.log(result);                        //result will be -6



// 4. Loop Iterations:
// First iteration (i = 1):
// result = 20 - 5 → result = 15.
// Second iteration (i = 2):
// result = 15 - 8 → result = 7.
// Third iteration (i = 3):
// result = 7 - 10 → result = -3.
// Fourth iteration (i = 4):
// result = -3 - 3 → result = -6.