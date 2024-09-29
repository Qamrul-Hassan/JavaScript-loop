
//7. Print numbers in reverse order from 20 to 1 using a while loop

//Why use while loop?
//A while loop is useful here because it allows you to start at 20 and decrement on each iteration. 
//The loop continues until it reaches 1. 
//It's a good way to demonstrate how while loops can be used for counting downwards as well as upwards.

let n = 20;
while (n >= 1) {
    console.log(n);
    n--;             // Decrement `n` to move to the next lower number
}