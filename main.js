const convertToC = require('./f2c.js');
const convertToF = require('./c2f.js');
//front end file 
// it is in charge of user interaction ONLY 

// here's how the data goes through the app

// 1. user types in the terminal
// 2. when they hit enter, node puts their inputs  into process.argv
// 3. we're going to send that input to our back end function
// 4. the back end function will return an answer
// 5. we'll print out that answer to the user

//grab the temp from the user
const temp = process.argv[2];

//grab the unit from the user
const unit = process.argv[3];

// if the unit is 'c'(for celsius), go get the answer from convertToC
// then print it
if (unit === 'c') {
    const celsius = convertToC(temp);
    console.log(celsius);
} else {
//otherwise, go get the answer from convertToF
//then print it
    const fahrenheit = convertToF(temp);
    console.log(fahrenheit);
}

//ternary 
//console.log(unit.toLowerCase === 'c' ? convertToC(temp) : convertToF(temp));


