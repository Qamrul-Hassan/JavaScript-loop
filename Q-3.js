//3. Calculate the sum of the elements in the array using a for loop

//Why use for loop?
//A for loop is perfect here because we want to iterate over each element in the array. 
//The loop runs from the start (i = 0) to the end (arr.length). 
//This allows us to sum the numbers by accessing each element by index (arr[i]).

let arr = [3, 8, 12, 5, 9];
let sum = 0 ;

for (let i = 0; i  < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);