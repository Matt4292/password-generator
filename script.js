// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;

var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];


// Provided by instructor
function askAboutUppercase(){
  allowUppercase = confirm("Are upper case characters allowed?");
  console.log(allowUppercase);
}

// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.


// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
function generatePassword(){
  var finalResult = ""

  // HINT: Remember that a for-loop can iterate from a starting number to a ending number, such as the number of characters in a password.

  // HINT: You may want to look into merging arrays together


  return finalResult;
}

// Write password to the #password input
function writePassword() {

  // ask the questions first
  askAboutUppercase();




  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);