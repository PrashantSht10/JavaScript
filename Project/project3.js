// Magic Eight Ball

let userName = 'John';

userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

const userQuestion = 'Will England win the Euros?';

console.log(`${userName} has asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

/*
Using if-else statement to solve the same problem.
if (eightBall === 0) {
  eightBall = 'It is certain';
}
else if (eightBall === 1) {
  eightBall = 'It is decidedly so';
}
else if (eightBall === 2) {
  eightBall = 'Reply hazy try again';
}
else if (eightBall === 3) {
  eightBall = 'Cannot predict now';
}
else if (eightBall === 4) {
  eightBall = 'Do not count on it';
}
else if (eightBall === 5) {
  eightBall = 'My sources say no';
}
else if (eightBall === 6) {
  eightBall = 'Outlook not so good';
}
else {
  eightBall = 'Signs point to yes';
}
*/

console.log(`The Magic Eight Ball’s answer: ${eightBall}`);
