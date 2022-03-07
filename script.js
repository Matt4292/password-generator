// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowercase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;

// Arrays of characters
var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowercaseChars = [ "a", "b", "c", "d", "e" ,"f" ,"g" ,"h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z" ];
var numbers = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ];
var specialChars = [ "!", "@", "#", "$", "%", "^", "&", "*", "?" ];

// Pop ups asking what kinds of characters to include
// Provided by instructor
function askAboutUppercase(){
  allowUppercase = confirm("Are upper case characters allowed?");
  console.log(allowUppercase);
}
// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.
function askAboutLowercase(){
  allowLowercase = confirm("Are lowercase characters allowed?");
  console.log(allowLowercase);
}
function askAboutNumbers(){
  allowNumbers = confirm("Are numbers allowed?");
  console.log(allowNumbers);
}
function askAboutSpecials(){
  allowSpecials = confirm("Are special characters allowed?");
  console.log(allowSpecials);
}
function askAboutCharacterCount(){
  passwordCharacterCount = parseInt(prompt("How many characters do you want in your password?"));
  console.log(passwordCharacterCount);
}

// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
function generatePassword(passwordLength, allowedCharacters){
  var finalResult = ""
  // Includes the characters the user has selected
  var allowedCharacters = [
    ...(allowLowercase ? lowercaseChars : []),
    ...(allowUppercase ? uppercaseChars : []),
    ...(allowSpecials ? specialChars : []),
    ...(allowNumbers ? numbers : []),
  ];
  var passwordLength = passwordCharacterCount;
 
  // Reprompts if user selects a character count less than the min or more than the max
  if (passwordLength < 8) {
  alert ("Password must be at least 8 characters.");
  passwordCharacterCount = parseInt(prompt("How many characters do you want in your password?"));
  }  else if (passwordLength > 128) {
  alert ("Password can't be more than 128 characters.");
  passwordCharacterCount = parseInt(prompt("How many characters do you want in your password?"));
  }


  for(var i=1; i<=passwordLength; i++){
    var randomIndex = Math.floor(Math.random()*allowedCharacters.length);
    finalResult+= allowedCharacters[randomIndex]
  }

  return finalResult;
}

// Write password to the #password input
function writePassword() {

  // ask the questions first
  askAboutUppercase();
  askAboutLowercase();
  askAboutNumbers();
  askAboutSpecials();
  askAboutCharacterCount();



  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);