/*
* The GambleBamble2 program implements an application that
* generates a random number from 1 to whatever the user puts as the max.
*
* @author  Ben Whitten
* @version 1.0
* @since   2020-12-01 
*/

// Defining require and process
/*eslint no-undef: "error"*/
/*global require*/
// Defining prompt for getting user input.
const prompt = require('prompt-sync')({sigint: true});

///////////////////////////////////////////////////////////////////////////////

function rollDie(maxValue) {
  const number = Math.floor(Math.random() * maxValue + 1);

  return(number);
}

///////////////////////////////////////////////////////////////////////////////

try {
  // Input for the width of the logFoot.
  var maxValue = prompt("Insert the maximum number to generate: ");
  var numberRolled = rollDie(maxValue);
   
  // Ensuring that the variables are integers.
  maxValue = Number(maxValue, 10);

  // Process
  if (isNaN(maxValue) == true) {
    console.log();
    console.log("ERROR: Invalid Input");
  } else {
    // Making sure length and width are intergers.
    console.log("The rolled number is: ", numberRolled);
  }

} catch (err) {
  console.log();
  console.log("ERROR: Invalid Input");
}
