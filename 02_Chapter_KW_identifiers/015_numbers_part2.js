// Numeric seperation

let million = 1_000_000;
let binarySep = 0b1010_0001;
let hexSep = 0xFF_FF;


//Big intiger

let big = 1234567890123456789012345678901234567890n;
let big2 = BigInt("1234567890123456789012345678901234567890");
let bigfromnum = BigInt(42);

console.log("BigInt literal:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:", bigfromnum);
console.log("Type of BigInt:", typeof big);