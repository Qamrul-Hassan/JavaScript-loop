//10. Write a program that prints "Even" for numbers divisible by 2 and "Odd" for others

//Why use for loop?
//Since the range of numbers (1 to 50) is known, a for loop is ideal.
//Within each iteration, the loop checks if the current number is divisible by 2. 
//If true, it prints "Even", otherwise "Odd". 
//This is a common pattern for simple conditions that involve iterating over a range of numbers.

for (let i = 1 ; i <= 50; i++) {            /*1. For Loop Initialization:
                                            What it does:
                                                This line initializes a for loop that starts with i set to 1.
                                                The loop will continue to execute as long as i is less than or equal to 50.
                                                After each iteration of the loop, i is incremented by 1 due to i++.
                                            Purpose:
                                                This structure allows us to iterate through all the integers from 1 to 50.
                                                The loop variable i is used to represent the current number in each iteration.*/
    
    
    
    if (i % 2 === 0) {                      /*2. If Condition:
                                            What it does:
                                                The expression i % 2 calculates the remainder when i is divided by 2.
                                                If the remainder is 0, it means that i is divisible by 2, which indicates that i is an even number.
                                            Purpose:
                                                This condition is used to check whether the current number i is even.*/




        console.log(i + " is Even");        /*3. Print Even Numbers:
                                            What it does:
                                                If the condition in the if statement is true (meaning i is even), this line executes.
                                                It prints the value of i followed by the string " is Even".
                                            Example:
                                                If i = 2, the output will be 2 is Even.*/

    } else {                                //4. Else Condition:
        console.log(i + " is Odd");         /*What it does:
                                                If the if condition is false (meaning i is not even, hence odd), the code inside the else block executes.
                                                //This line prints the value of i followed by " is Odd".
                                           // Example:
                                                //If i = 1, the output will be 1 is Odd.
                                            5. Loop Execution:
                                                First Iteration (i = 1):
                                                The loop checks 1 % 2, which equals 1 (not even), so it goes to the else block and prints 1 is Odd.
                                                Second Iteration (i = 2):
                                                The loop checks 2 % 2, which equals 0 (even), so it prints 2 is Even.
                                                This process continues for all integers up to 50, alternating between the two print statements based on whether the number is even or odd.*/
    }
}