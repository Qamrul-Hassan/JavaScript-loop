//1. Print all odd numbers between 1 and 50 using a while loop
//Why use while loop?

//# A while loop is useful when the number of iterations isn't predetermined. In this case, we are iterating through numbers between 1 and 50, and checking for a condition (odd numbers). A while loop keeps checking the condition (num <= 50) and runs until it becomes false.

let num = 1;
while (num <= 50) {
    if (num % 2 !==0) {
        console.log(num);
    }
    num++;
}




