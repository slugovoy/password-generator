
// Assignment Code
let generateBtn = document.querySelector("#generate");
let clearBtn = document.querySelector("#clear");
let textArea = document.querySelector("#password");

// Function for generating password
function generatePassword() {

let passwordLength = document.getElementById("slider").value;
let upperCase = document.getElementById("upper");
let lowerCase = document.getElementById("lower");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

  const symb = "~!@#$%^&*()_+{}:?><;.,";
  const numb = "1234567890";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
  const lowerCaseLetters = upperCaseLetters.toLowerCase();

  let char = "";
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
    let password = "";

    for (var i = 0; i < passwordLength; i++) {
      password = password + char.charAt(Math.floor(Math.random() * (char.length - 1)));
    }

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


 document.getElementById("slider").oninput = 
 function () {
     let sliderVal = document.getElementById("slider").value;
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

