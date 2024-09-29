//6. Print numbers from 1 to 20 but skip numbers divisible by 4 using a while loop

//Why use while loop with continue?
//The while loop runs through numbers from 1 to 20, 
//but the continue statement helps to skip certain numbers (in this case, numbers divisible by 4). 
//This shows how to selectively skip iterations without stopping the loop entirely.

let n = 1 ;
while (n <= 20) {
    if (n % 4 === 0) {   // Check if the number is divisible by 4
        n++;            // If divisible by 4, increment `n` and skip this iteration
        continue;       // Skip the rest of the loop and go to the next iteration
    }
    console.log(n);     // If not divisible by 4, print the number
    n++;                // Increment `n` for the next iteration
}