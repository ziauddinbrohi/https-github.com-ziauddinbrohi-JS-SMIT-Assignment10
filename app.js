// question no.1

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "Welcome!");

// // // question no.2

var phoneModel = prompt("Enter your favorite mobile phone model:");
if (phoneModel) {
    var length = phoneModel.length;
    alert("The length of your input is: " + length);
} else {
    alert("You didn't enter anything!");
}

// // // question no.3

var word = "Pakistani";
var letter = "n";
var index = word.indexOf(letter);
alert("The index of '" + letter + "' in '" + word + "' is: " + index);


// // // question no.4

var phrase = "Hello World";
var letter = "l";
var lastIndex = phrase.lastIndexOf(letter);
alert("The last index of '" + letter + "' in '" + phrase + "' is: " + lastIndex);


// // // question no.5

var word = "Pakistani";
var index = 3;
var character = word.charAt(index);
alert("The character at index " + index + " in '" + word + "' is: " + character);


// // // question no.6

var word = "Hyderabad";
var newWord = word.replace("Hyder", "Islam");
alert("The new word is: " + newWord);


// // // question no.7

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
alert("The updated message is: " + newMessage);


// // // question no.8

var strNumber = "472";
var numNumber = Number(strNumber);
alert("Value: " + strNumber + ", Type: " + typeof strNumber);
alert("Value: " + numNumber + ", Type: " + typeof numNumber);

// // // question no.9

var userInput = prompt("Enter some text:");
var upperCaseInput = userInput.toUpperCase();
alert("Your input in uppercase: " + upperCaseInput);


// // // question no.10

var userInput = prompt("Enter some text:");
var titleCaseInput = userInput
    .toLowerCase()
    .split(' ')
    .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

alert("Your input in title case: " + titleCaseInput);


// // // question no.11

var userInput = prompt("Enter some text:");
var titleCaseInput = userInput
    .toLowerCase()
    .split(' ')
    .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

alert("Your input in title case: " + titleCaseInput);


// // // question no.12

var num = 35.36;
var numString = num.toString(); 
var result = numString.replace(".", ""); 
alert("The result is: " + result);

// question No.13
var username = prompt("Enter your username:");

while (username.includes('@') || username.includes('.') || username.includes('!')) {
    alert("Invalid username! Please avoid special symbols: @ (ASCII: 64), . (ASCII: 46), ! (ASCII: 33)");
    username = prompt("Enter a valid username:");
}

alert("Valid username: " + username);


// // question no.14


var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter the item you want to search for:");

var index = A.findIndex(function(item) {
    return item.toLowerCase() === userInput.toLowerCase();
});

if (index !== -1) {
    alert(userInput + " is available in the list at index: " + index);
} else {
    alert(userInput + " is not available in the list.");
}


// // question no.15

function isValidPassword(password) {
    
    if (password.length < 6) {
        return false;
    }
  
    if (/^\d/.test(password)) {
        return false;
    }
   
    var hasLetter = /[a-zA-Z]/.test(password);
    var hasNumber = /[0-9]/.test(password);
    
    return hasLetter && hasNumber;
}

var password = prompt("Enter your password:");

while (!isValidPassword(password)) {
    alert("Invalid password! Your password must:\n" +
          "1. Be at least 6 characters long\n" +
          "2. Not start with a number\n" +
          "3. Contain both alphabets and numbers");
    password = prompt("Enter a valid password:");
}

alert("Password is valid!");


// // Question no.16

var userInput = prompt("Enter some text:");
if (userInput.length > 0) {
    var lastCharacter = userInput.charAt(userInput.length - 1);
    alert("The last character is: " + lastCharacter);
} else {
    alert("You did not enter any text.");
}

// // question no.17

var userInput = prompt("Enter some text:");
if (userInput && userInput.length > 0) {
    var lastCharacter = userInput.charAt(userInput.length - 1);
    alert("The last character is: " + lastCharacter);
} else {
    alert("You did not enter any text.");
}

// // question no.18

var str = "The quick brown fox jumps over the lazy dog";
var wordToCount = "the";
var words = str.toLowerCase().split(" ");
var count = 0;
for (var i = 0; i < words.length; i++) {
    if (words[i] === wordToCount) {
        count++;
    }
}

alert("The word '" + wordToCount + "' occurs " + count + " times in the given string.");
