// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength = document.querySelector("#pwLength");
var isLowerCase = document.querySelector("#isLowerCase");
var isUpperCase = document.querySelector("#isUpperCase");
var isNumeric = document.querySelector("#isNumeric");
var isSpecial = document.querySelector("#isSpecial");
var pwLengthShow = document.querySelector("#pwLengthShow");
pwLengthShow.value = pwLength.value;
pwLength.oninput = function() {
  pwLengthShow.value = this.value;
}
pwLengthShow.oninput = function() {
  if (this.value > 128) {
    this.value = 128
  }
  pwLength.value = this.value;
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
    var availableCharacters = [];
    var PW = [];
    console.log(availableCharacters);
    // pushes the selected datasets to availableCharacters
    if (isLowerCase.checked === true) {
      availableCharacters.push(...alphaLower);
    }
    if (isUpperCase.checked === true) {
      availableCharacters.push(...alphaUpper);
    }
    if (isNumeric.checked === true) {
      availableCharacters.push(...numeric);
    }
    if (isSpecial.checked === true) {
      availableCharacters.push(...symbol);
    }

    if (availableCharacters.length === 0) {
      return "No Character Set Selected"
    } else {
      for (let i = 0; i < pwLength.value; i++) {
        var randomChar = availableCharacters[Math.floor(Math.random() * (availableCharacters.length - 1))]
        // If randomChar has not generated at least 1 value of each catagory
        //force a randomChar each within the last 4 characters of the password
        if (!PW.some(char=> alphaLower.includes(char)) && i === pwLength.value - 4 && isLowerCase.checked === true) {
          randomChar = alphaLower[Math.floor(Math.random() * (alphaLower.length - 1))]
          console.log('seeded lowercase');
        } else if (!PW.some(char=> alphaUpper.includes(char)) && i === pwLength.value - 3 && isUpperCase.checked === true) {
          randomChar = alphaUpper[Math.floor(Math.random() * (alphaUpper.length - 1))]
          console.log('seeded uppercase');
        } else if (!PW.some(char=> numeric.includes(char)) && i === pwLength.value - 2 && isNumeric.checked === true) {
          randomChar = numeric[Math.floor(Math.random() * (numeric.length - 1))]
          console.log('seeded number');
        } else if (!PW.some(char=> symbol.includes(char)) && i === pwLength.value - 1 && isSpecial.checked === true) {
          randomChar = symbol[Math.floor(Math.random() * (symbol.length - 1))]
          console.log('seeded symbol');
        }
        PW.push(randomChar);
      }
      return PW.join('');
    }

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
