// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// creating all types of characters used in a generated password.
var symbols = "~!@#$%^&*()_+-=";
var numbers = "1234567890";
var upperCaseLetters = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

var emptyPassword = "";

// below 4 functions ask user for the desired characters to be included in their password and validates input.

// Symbols
function wantSymbols() {
  var userInput = prompt("Do you wish to include symbols? Y/N: ");
  userInput = userInput.toLowerCase();
  if (userInput === 'y' || userInput === 'n') {
    if (userInput === 'y') {
      emptyPassword += symbols
    } else {
      null
    }
    return emptyPassword;
  } else {
    alert("Invalid input. please enter 'y' or 'n' ")
    wantSymbols();
  }
}
// Numbers 
function wantNumbers() {
  var userInput = prompt("Do you wish to include numbers? Y/N: ");
  userInput = userInput.toLowerCase();
  if (userInput === 'y' || userInput === 'n') {
    if (userInput === 'y') {
      emptyPassword += numbers
    } else {
      null
    }
    return emptyPassword;
  } else {
    alert("Invalid input. please enter 'y' or 'n' ")
    wantNumbers();
  }
}

// Upper Case Letters 
function wantUpper() {
  var userInput = prompt("Do you wish to include upper-case lettters? Y/N: ");
  userInput = userInput.toLowerCase();
  if (userInput === 'y' || userInput === 'n') {
    if (userInput === 'y') {
      emptyPassword += upperCaseLetters;
    } else {
      null
    }
    return emptyPassword;
  } else {
    alert("Invalid input. please enter 'y' or 'n' ")
    wantUpper();
  }
}

// Lower case Letters
function wantLower() {
  var userInput = prompt("Do you wish to include lower-case letters? Y/N: ");
  userInput = userInput.toLowerCase();
  if (userInput === 'y' || userInput === 'n') {
    if (userInput === 'y') {
      emptyPassword += lowerCaseLetters;
    } else {
      null
    }
    return emptyPassword;
  } else {
    alert("Invalid input. please enter 'y' or 'n' ")
    wantLower();
  }
}

// function that asks the user for their desired password length,
//validates then saves inside the variable pwLength. 
function getLength() {
  var userInput = parseInt(prompt("choose a length of at least 8 characters and no more than 128 characters"));
  if (userInput >= 8 && userInput <= 128) {
    var pwLength = userInput;
    return pwLength;
  } else {
    alert("Invalid input. Length must be beween 8 and 128 characters.")
    getLength();
  }
}

//helper function that generates a random set of characters from a given string/ string array.
function randomPassword(String){
  return String[Math.floor(Math.random() * String.length)]
}

//The big function that's going to use the above 'helper' functions to properly generate a password per user's preferences. 
function generatePassword() {
  let password = "";
  
  //saving an array of desired characters as a string array
  var criteriaString = wantLower() + wantSymbols() + wantUpper() + wantNumbers();

  // saving desired password length (integer)
  var pwCount = getLength();

  //for loop that'll randomly pick characters from the criteria string array length-of-password times.
  for(i=0; i<pwCount; i++){
    password += randomPassword(criteriaString)
  }
  // returns final generated password.
  return password;
}