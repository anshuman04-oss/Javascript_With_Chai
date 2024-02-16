let score = 89;

console.log(typeof score);

let valueInNumber = Number(score)

console.log(valueInNumber);

// We always need to write the new type with the first letter capital while performing type conversion.

let inString = String(valueInNumber);

console.log(inString);

console.log(typeof inString);

let score2 = null;
console.log(score2)
console.log(typeof score2)
console.log(Number(score2))

let score3 = undefined
console.log(score3)
console.log(typeof score3)
console.log(Number(score3))

// If we give any number with double quotes, i.e. as a string, then it is convertible to a Number.
// However, if we give any alphabet with double quotes, it's type gets converted to number, but on printing the value, the compiler shows NaN.

let myName = "Anshuman"
console.log(Boolean(myName))
let empty = ""
console.log(Boolean(empty))

// If an empty string is tried to be converted into boolean, it returns false
// Else, it returns true.