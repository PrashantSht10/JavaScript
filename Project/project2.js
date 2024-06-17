// Dog Years

// 23 is assigned to a variable myAge
const myAge = 23;

// 2 is assigned to a variable earlyYears
let earlyYears = 2;

// earlyYears is multiplied by 10.5 
earlyYears *= 10.5;

// the value in myAge is subtracted by 2 and the result is stored in laterYears
let laterYears = myAge - 2;

// laterYears is multiplied by 4
laterYears *= 4;

console.log(earlyYears); // Output: 21
console.log(laterYears); // Output: 84

// earlyYears and laterYears is added and the result is stored in myAgeInDogYears
myAgeInDogYears = earlyYears + laterYears;

// the string is converted to lowercase and the result is stored in myName
myName = 'Prashant'.toLowerCase(); // Output: prashant

// string interpolation is done to display the value inside console.log()
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);