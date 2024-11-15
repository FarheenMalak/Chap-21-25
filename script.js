//Q#1
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

//Q#2
let phoneModel = prompt("Enter your favorite mobile phone model:");
document.write("The length of your input is: " + phoneModel.length + "<br>");

//Q#3
let word = "Pakistani";
let index = word.indexOf("n");
document.write("The index of 'n' in the word 'Pakistani' is: " + index + "<br>");

//Q#4
let phrase = "Hello World";
let lastIndex = phrase.lastIndexOf("l");
document.write("The last index of 'l' in 'Hello World' is: " + lastIndex + "<br>");

//Q#5
let charAtThirdIndex = word.charAt(3);
document.write("The character at the 3rd index in 'Pakistani' is: " + charAtThirdIndex + "<br>");

//Q#6
let fullNameUsingConcat = firstName.concat(" ", lastName);
alert("Hello, " + fullNameUsingConcat + "!");

//Q#7
let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
document.write("The new city name is: " + newCity + "<br>");

//Q#8
let message = "Ali and Sami are best friends. They play cricket and football together.";
let updatedMessage = message.replace(/and/g, "&");
document.write("Updated message: " + updatedMessage + "<br>");

//Q#9
let str = "472";
let num = Number(str);
document.write("Value: " + num + " (Type: " + typeof num + ")<br>");

//Q#10
let userInput = prompt("Enter some text:");
let upperCaseInput = userInput.toUpperCase();
document.write("Input in capital letters: " + upperCaseInput + "<br>");

//Q#11
let titleCaseInput = userInput
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
document.write("Input in title case: " + titleCaseInput + "<br>");

//Q#12
let num2 = 35.36;
let strNum = num2.toString().replace(".", "");
document.write("Result: " + strNum + "<br>");

//Q#13
let username = prompt("Enter your username:");
if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
    alert("Invalid username. Please enter a valid username without [@ . , !]");
} else {
    alert("Username is valid!");
}

//Q#14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("Enter an item to search for:").toLowerCase();
let found = false;
for (let item of A) {
    if (item.toLowerCase() === searchItem) {
        found = true;
        break;
    }
}
if (found) {
    alert(searchItem + " is available in the list.");
} else {
    alert(searchItem + " is not available in the list.");
}

//Q#15
let password = prompt("Enter your password:");
function isValidPassword(password) {
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    if (!isNaN(password.charAt(0))) {
        alert("Password should not start with a number.");
        return false;
    }
    let hasAlphabet = /[a-zA-Z]/.test(password);
    let hasNumber = /\d/.test(password);
    if (!hasAlphabet || !hasNumber) {
        alert("Password must contain both alphabets and numbers.");
        return false;
    }
    return true;
}
if (isValidPassword(password)) {
    alert("Password is valid.");
} else {
    alert("Please enter a valid password.");
}

//Q#16
let university = "University of Karachi";
let universityArray = university.split("");
universityArray.forEach(char => document.write(char + "<br>"));

//Q#17
let userInput2 = prompt("Enter some text:");
let lastCharacter = userInput2.charAt(userInput2.length - 1);
document.write("The last character of your input is: " + lastCharacter + "<br>");

//Q#18
let text = "The quick brown fox jumps over the lazy dog";
let lowerCaseText = text.toLowerCase();
let occurrences = lowerCaseText.match(/\bthe\b/g);
let count = occurrences ? occurrences.length : 0;
document.write("The word 'the' occurs " + count + " times in the given string.");
