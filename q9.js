// Write a code to get the input in the given format and print the output in the given format.

// Input Description:
// A single line contains a string.

// Output Description:
// Print the characters in a string separated by line.

// Sample Input :
// guvigeek
// Sample Output :
// g
// u
// v
// i
// g
// e
// e
// k

const userInput = ["guvigeek"];

const str = userInput[0];

let i = 0;
while (i < str.length) {
  console.log(str[i]);
  i++;
}

// advance solution
// console.log(str.split("").join("\n"));
