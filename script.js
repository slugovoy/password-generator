
// Assignment Code
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear");
var textArea = document.querySelector("#password");

// Function for generating password
function generatePassword() {

var passwordLength = document.getElementById("slider").value;
var upperCase = document.getElementById("upper");
var lowerCase = document.getElementById("lower");
var numbers = document.getElementById("numbers");
var symbols = document.getElementById("symbols");

  var symb = "~!@#$%^&*()_+{}:?><;.,";
  var numb = "1234567890";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
  var lowerCaseLetters = upperCaseLetters.toLowerCase();

  var char = "";
  if (upperCase.checked) {
    char += upperCaseLetters;
  }
  if (lowerCase.checked) {
    char += lowerCaseLetters;
  }
  if (numbers.checked) {
    char += numb;
  }
  if (symbols.checked) {
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

document.getElementById("length").innerHTML = "Length: 20";

 document.getElementById("slider").oninput = 
 function () {
     var sliderVal = document.getElementById("slider").value;
     if(sliderVal > 0) {
         document.getElementById("length").innerHTML = "Length: " + sliderVal;

     } else {
         document.getElementById("length").innerHTML = "Length: 1";
     }
 } 

// function for clear button
clearBtn.addEventListener("click", function () {
  textArea.value = "";
});

