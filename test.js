//method 1: using array destructuring
let a = 5;
let b = 6;
[a, b] = [b, a];
console.log({ a, b }); //{ a: 6, b: 5 }

//method 2: using addition and subtraction
let a = 5;
let b = 6;

a = a + b; // a becomes 11
b = a - b; // b becomes 5 (because 11 - 6 = 5)
a = a - b; // a becomes 6 (because 11 - 5 = 6)

console.log({ a, b }); //{ a: 6, b: 5 }

//method 3: using XOR
let a = 5; // in binary: 0101
let b = 6; // in binary: 0110

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log({ a, b }); //{ a: 6, b: 5 }
