// 2. Print all even numbers from 2 to 100 using a for loop

// Why use for loop?
// # The for loop is the most efficient here because we know exactly how many iterations are needed (starting at 2 and going up to 100). 
//The loop increments by 2 on each iteration, only targeting even numbers, and the structure of for makes it concise.

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}