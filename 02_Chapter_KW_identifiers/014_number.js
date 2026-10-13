//integer literals

// Decimal (base 10)
let decimal = 42;
console.log("Decimal:", decimal);

// Binary (base 2)
let binary = 0b101010;
console.log("Binary:", binary);
// Octal (base 8)
let octal = 0o52;
console.log("Octal:", octal);

// Hexadecimal (base 16)
let hexadecimal = 0x2A;
console.log("Hexadecimal:", hexadecimal);

//Floating-point literals
let float1 = 3.14;
let float2 = -0.5;
let float3 = .5; // valid, but not for readiablity
let float4 = 5.; // valid, but not for readiablity

console.log("float 3.14:", float1);
console.log("float -0.5:", float2);
console.log("float 0.5:", float3);
console.log("float 5.0:", float4);


//exponential notation
let exp1 = 1.5e3; // 1.5 * 10^3 = 1500
let exp2 = 1.5e-3; // 1.5 * 10^-3 = 0.0015
let exp3 = 2E10; // 2 * 10^10 = 20000000000

console.log("Exponential 1.5e3:", exp1); // 1500
console.log("Exponential 1.5e-3:", exp2);// 0.0015
console.log("Exponential 2E10:", exp3); // 20000000000