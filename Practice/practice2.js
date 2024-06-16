//Kelvin Weather
const kelvin = 293; //a constant variable kelvin is set to 293
//Kelvin is converted to Celsius by subtracting 273 from the kelvin variable
const celsius = kelvin - 273; 
//Fahrenheit is calculated using the equation and the answer is stored in a variable named fahrenheit
let fahrenheit = celsius * (9 / 5) + 32; 
//When converting from Celsius to Fahrenheit, we often get a decimal number so the .floor() method from the built-in Math object is used to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); // Output: The temperature is 68 degrees Fahrenheit.
//Celsius is converted to Newton
let newton = celsius * (33 / 100);
//the value stored in newton variable is rounded
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`); // Output: The temperature is 6 degrees Newton.

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