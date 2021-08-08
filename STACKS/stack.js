// STACKS |_|
// functions: push, pop, length, peek
// Example with Palindrome program

let stack = [];
let str = 'malayalam';
let revStr = '';

// loop over str and push str into stack
for(let i = 0; i < str.length; i++){
  stack.push(str[i]);
}

// loop over stack and push stack element into revStr
for(let i = 0; i<stack.length; i++) {
    revStr += stack[i];
}

revStr === str ? console.log('Palindrome') : console.log("Not a Palindrome")
