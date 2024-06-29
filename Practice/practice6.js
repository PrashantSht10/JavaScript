// Loops

// Repeating Tasks Manually

let vacationSpots = ['Paris', 'New York', 'Liverpool'];

console.log(vacationSpots[0]); // prints Paris
console.log(vacationSpots[1]); // prints New York
console.log(vacationSpots[2]); // prints Liverpool

// The For Loop

for (let count = 5; count <= 10; count++){
    console.log(count);
}
/*
Output:
5
6
7
8
9
10
*/

// Looping in Reverse

for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}
/*
Output:
5
6
7
8
9
10
*/


// Looping through Arrays

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// using string concatenation
for (let i = 0; i < vacationSpots.length; i++)
{
  console.log('I would love to visit '+ vacationSpots[i]);
}
/* 
Output:
I would love to visit Bali
I would love to visit Paris
I would love to visit Tulum
*/

const vacationSpot = ['Bali', 'Paris', 'Tulum'];

// using string interpolation
for (let i = 0; i < vacationSpots.length; i++)
{
  console.log(`I would love to visit ${vacationSpot[i]}`);
}
/* 
Output:
I would love to visit Bali
I would love to visit Paris
I would love to visit Tulum
*/

// Nested Loops

const bobsFollowers = ['John', 'Rose', 'Jack', 'Emily'];
const tinasFollowers = ['Rose', 'Emily', 'Harry'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}

console.log(mutualFollowers); // Output: [ 'Rose', 'Emily' ]