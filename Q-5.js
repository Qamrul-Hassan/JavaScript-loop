//5. Write a for loop that breaks when it encounters the number 45

//Why use for loop with break?
//A for loop is ideal here as it allows counting from 1 to 100. 
//We introduce the break statement to exit the loop early when the number 45 is reached. 
//This demonstrates how to control the loop flow and exit based on a condition.


for (let i = 1; i <= 100; i++) {
    if (i === 45) {
        break;
    }
    console.log(i);
}
