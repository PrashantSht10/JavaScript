// Arrays 

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

// Create an Array

const hobbies = ['Football', 'Movies', 'Programming'];

console.log(hobbies);

// Accessing Elements

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];

console.log(listItem);

console.log(famousSayings[2]);

console.log(famousSayings[3]);

// Update Elements

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

console.log(groceryList);

// Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';

console.log(condiments);

condiments = ['Mayo'];

console.log(condiments);

utensils[3] = 'Spoon';

console.log(utensils);

// The .length property

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

// The .push() Method

let chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('do assignment', 'do laundry');

console.log(chores);

// The .pop() Method

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

let removed = chores.pop();

console.log(chores);

console.log(removed);

// More Array Methods

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

// Arrays and Functions

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement (newArr) {
  newArr.pop();
}

removeElement(concept);

console.log(concept);

// Nested Arrays

let numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];

console.log(target); // prints 6

// Uses the .length property to find the last element of an array

const colors = ['red', 'green', 'blue', 'black'];

const arr = colors[colors.length - 1];

console.log(arr); // prints black

// Take all the elements in an array and make a string

const arr1 = ['Hello', 'World'];

const joined = arr1.join(' ');

console.log(joined); // prints Hello World

// Find the return value of calling .push() on an array

const pushed = colors.push('white');

console.log(colors); ['red', 'green', 'blue', 'black', 'white']

console.log(pushed); // prints 5
