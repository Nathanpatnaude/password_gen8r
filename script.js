// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength = document.querySelector("#pwLength");
var isLowerCase = document.querySelector("#isLowerCase");
var isUpperCase = document.querySelector("#isUpperCase");
var isNumeric = document.querySelector("#isNumeric");
var isSpecial = document.querySelector("#isSpecial");
var pwLengthShow = document.querySelector("#pwLengthShow");
pwLengthShow.innerHTML = pwLength.value;
pwLength.oninput = function() {
  pwLengthShow.innerHTML = this.value;
}
var alpha = "abcdefghijklmnopqrstuvwxyz";
var alphaLower = alpha.split('');
var alphaUpper = alpha.toUpperCase().split('');
var numeric = "1234567890".split('');
var symbol = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/".split('');
console.log(pwLength, isSpecial);

//    Uppercase letters: A-Z.
// Lowercase letters: a-z.
// Numbers: 0-9.
// Symbols: ~`! @#$%^&*()_-+={[}]|\:;"'<,>.?/

function generatePassword() {
    var pwCharacters = [];

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
