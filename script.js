// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt(
    "Insert desired number of characters(from 8 to 128) for your password"
  );
  var upperCase = confirm("Do you want to include upper case characters?");
  var lowerCase = confirm("Do you want to include lower case characters?");
  var numbers = confirm("Do you want to include numbers?");
  var symbols = confirm("Do you want to include symbols?");

  var symb = "~!@#$%^&*()_+{}:?><;.,";
  var numb = "1234567890";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
  var lowerCaseLetters = upperLetters.toLowerCase();

  var char = "";
  (upperCase) ? char += upperCaseLetters : "";
  (lowerCase) ? char += lowerCaseLetters : "";
  (numbers) ? char += numb : "";
  (symbols) ? char += symb : "";

  var pass = "";

  for (var i = 0; i < passwordLength; i++){
      pass = pass + char.charAt(Math.floor(Math.random() * (char.length - 1)));
  }
  

  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
