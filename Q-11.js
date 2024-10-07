function factorial(n) {
    let result = 1;       // Initialize result to 1
    let i = n;            // Start with n

    while (i > 0) {       // Loop until i is greater than 0
        result *= i;      // Multiply the result by the current value of i
        i--;              // Decrement i by 1 in each iteration
    }

    return result;        // Return the final factorial value
}

console.log(factorial(5));  // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(factorial(0));  // Output: 1  (0! is defined as 1)
