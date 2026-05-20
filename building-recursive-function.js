/*
1. Write a function named reverseString that takes a string as input.
2. The function should:
○ Return the string itself if it contains only one character (base case).
○ Use recursion to reverse the string by concatenating the last character
of the string with the result of the recursive call on the remaining part
of the string (recursive case).
3. Test the function with various string inputs to verify its correctness

*/

//defining a function to rverse string
function reverseString(stringToReverse){
//defining the base case, if length of string is less than or equal to 1, return the string
    if(stringToReverse.length <=1 ){
        return stringToReverse;
    }
    //getting the last character
    let lastChar = stringToReverse.charAt(stringToReverse.length - 1);
    //getting the remaining string to rverse using recursive function
    let remainingString = stringToReverse.substring(0,stringToReverse.length - 1 );
   //returning the final reversed string.
    return lastChar + reverseString(remainingString) ;

    
}
//calling the functions with arguments.
console.log(reverseString("Hello"));
console.log(reverseString("Welcome"));
console.log(reverseString(""));
console.log(reverseString("A"));
