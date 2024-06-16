// Conditional Statements

// If Statement

let sale = true; // a boolean true is assigned to a variable sale
sale = false; // a boolean false is reassigned to the same variable sale
// prints Time to buy! if true. Otherwise, prints Time to wait for a sale. 
if (sale){
  console.log('Time to buy!');
}
else {
    console.log('Time to wait for a sale.');
}

// Comparison Operators

let hungerLevel = 7; // 7 is assigned to a variable hungerLevel
// If hungerLevel > 7, We can eat later! is printed. Otherwise, Time to eat! is printed
if (hungerLevel > 7) {
  console.log('Time to eat!');
}
else {
  console.log('We can eat later!');
}

// Logical Operators

let mood = 'sleepy'; // a variable mood is assigned a string 'sleepy'
let tirednessLevel = 6; // 6 is assigned to a variable tirednessLevel

// and (&&) operator
// If both the conditions in if statement evaluates to true, then time to sleep is printed. Otherwise, not bed time yet is printed
if ((mood === 'sleepy') && (tirednessLevel > 8)) {
  console.log('time to sleep');
}
else {
  console.log('not bed time yet');
}

// or (||) operator
// If any one of the conditions in if statement evaluates to true, the code block in the if statement will run. For the code block in the else statement to run both conditions in if statement should be false
if ((mood === 'sleepy') || (tirednessLevel > 8)) {
    console.log('time to sleep');
}
  else {
    console.log('not bed time yet');
}

// not (!) operator
// The ! not operator reverses, or negates, the value of a boolean:
let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true

// Truthy and Falsy

let wordCount = 10; // a truthy value is assigned to wordCount
// Since the varaible wordCount has truthy value, the code block in the if statement will run
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = ''; // a falsy value is assigned to favoritePhrase
// Since the varaible favoritePhrase has falsy value, the code block in the else statement will run
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Truthy and Falsy Assignment

let tool = ''; // a falsy value is assigned to tool i.e. ''

// short circuit evaluation is used to assign writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`); // Output: The pen is mightier than the sword.

tool = 'marker'; // a truthy value is assigned to tool i.e. marker
writingUtensil = tool || 'pen'
console.log(`The ${writingUtensil} is mightier than the sword.`); // Output: The marker is mightier than the sword.

// Ternary Operator

let isLocked = false; // a boolean false is assigned to a variable isLocked
// The firstExpression will execute if condition is truthy. If condition is falsy then the secondExpression will execute.
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true; // a boolean true is assigned to a variable isCorrect
// The firstExpression will execute if condition is truthy. If condition is falsy then the secondExpression will execute.
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favouritePhrase = 'Love That!'; 
// The firstExpression will execute if condition is truthy. If condition is falsy then the secondExpression will execute.
favouritePhrase  === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// Else If Statements

let season = 'summer'; // a string 'summer' is assigned to a variable season

// if/else if/else statements are read from top to bottom, so the first condition that evaluates to true from the top to bottom is the block that gets executed
// 3rd else if statement evaluates to true so the code inside the first else if statement is executed
if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} 
else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
}
else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
}
else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
}
else {
  console.log('Invalid season.');
}

// The switch keyword

let athleteFinalPosition = 'first place';

// If the expression’s value matches the value of the case then the string in that case is logged to the console
// If the expression’s value does not equal any value of the cases, then the string in default is logged to the console
switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;  
  default:
    console.log('No medal awarded.');  
    break;
}