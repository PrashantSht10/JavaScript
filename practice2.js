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
