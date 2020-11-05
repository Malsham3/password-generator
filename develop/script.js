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

// below 4 functions ask user for the desired characters to be included in their password and validates input.

// Symbols
function wantSymbols(){
  var userInput = prompt("Do you wish to include symbols? Y/N: ");
  userInput = userInput.toLowerCase;
  if(userInput === 'y' || userInput === 'n'){
    return true
  }else{
    return false
  }
}
// Numbers
function wantNumbers(){
  var userInput = prompt("Do you wish to include numbers? Y/N: ");
  userInput = userInput.toLowerCase;
  if(userInput === 'y' || userInput === 'n'){
    return true
  }else{
    return false
  }
}
// Upper Case Letters 
function wantUpper(){
  var userInput = prompt("Do yo wish to include upper case letters? Y/N: ")
  userInput = userInput.toLowerCase;
  if(userInput === 'y' || userInput === 'n'){
    return true
  }else{
    return false
  }
}
// Lower case Letters
function wantLower(){
  var userInput = prompt("Do you wish to include symbols? Y/N: ");
  userInput = userInput.toLowerCase;
  if(userInput === 'y' || userInput === 'n'){
    return true
  }else{
    return false
  }
}

// function that asks the user for their desired password length,
//validates then saves inside the variable pwLength. 
function getLength(){
  var userInput = parseInt(prompt("choose a length of at least 8 characters and no more than 128 characters"));
  if(userInput >= 8 && userInput <=128){
    pwLength = userInput;
    return pwLength;
  }else{
    alert("Invalid input. Length must be beween 8 and 128 characters.")
    getLength();
  }
}

//The big function that's going to use the above 'helper' functions to properly generate a password per user's preferences. 
function generatePassword(){
  //prompt user for criteria
  //validate their inputs
}

// GIVEN I need a new, secure password //
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page