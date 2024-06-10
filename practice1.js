//prints 23 to the console
console.log(23); 
console.log(5); //prints 5

//Opening line
console.log('It was love at first sight.');
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/

//Data Types
console.log('JavaScript'); //prints JavaScript
console.log(2011); //prints 2011
console.log('Woohoo! I love to code! #codecademy'); //prints the string written inside the quotation
console.log(20.49); //prints 20.49(decimal number)

//Arithmetic Operators
console.log(23 + 3.5); //use of addition operator
console.log(2024 - 1969); //use of subtraction operator
console.log(65 / 240); //use of division operator
console.log(0.2708 * 100); //use of multiplication operator

//String Concatenation
console.log('Hello' + 'World'); //prints HelloWorld (no space between two strings)
console.log('Hello' + ' ' + 'World'); //prints Hello World (space between two strings)

//Properties
console.log('Teaching the world how to code'.length); //prints 30 as there are 30 characters in the given string

//Methods
console.log('Codecademy'.toUpperCase()); //prints CODEACADEMY
console.log('    Remove whitespace   '.trim()); //trim() method removes the whitespace at the beginning and end of the string

//Built-in Objects
console.log(Math.random()); //generate a number between 0 and 1
console.log(Math.random() * 100); //generate a number between 0 and 100
console.log(Math.floor(Math.random() * 100)); //Returns the largest integer less than or equal to the input
console.log(Math.ceil(43.8)); //Returns the smallest integer greater than or equal to the input
console.log(Number.isInteger(2017)); //Determines whether the passed value is an integer or not

//Variables
//Create a Variable: var
var favoriteFood = 'pizza'; //a string 'pizza' is assigned to a variable named favoriteFood
var numOfSlices = 8; //8 is assigned to a variable named numOfSlices
console.log(favoriteFood); //prints pizza 
console.log(numOfSlices); //prints 8

//Create a Variable: let
let changeMe = true; //variable called changeMe is set equal to the boolean true
console.log(changeMe); //prints true
changeMe = false; //variable called changeMe is set equal to the boolean false
console.log(changeMe); //prints false

//Create a Variable: const
const entree = 'Enchiladas'; //a constant variable named entree is set equal to the string 'Enchiladas'
console.log(entree); //prints Enchiladas
entree = 'Tacos'; //throws this error = TypeError: Assignment to constant variable, as we cannot reassign a constant variable
const testing; //throws this error = SyntaxError: Missing initializer in const declaration, as we need to initialize a const variable with a value