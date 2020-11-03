// Assignment Code
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear");
var textArea = document.querySelector("#password");

// Function for generating password
function generatePassword() {
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
  var lowerCaseLetters = upperCaseLetters.toLowerCase();

  var char = "";
  if (upperCase) {
    char += upperCaseLetters;
  }
  if (lowerCase) {
    char += lowerCaseLetters;
  }
  if (numbers) {
    char += numb;
  }
  if (symbols) {
    char += symb;
  }

  if (char === "") {
    alert("You didn't choose any parameters.Choose at least one");
    generatePassword();
  } else {
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      password = password + char.charAt(Math.floor(Math.random() * (char.length - 1)));
    }

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//var clearBtn = document.querySelector("#clear");
//var textArea = document.querySelector("#password");

// function for clear button
clearBtn.addEventListener("click", function () {
  textArea.value = "";
});
