console.log("Connected!");

// global variables/constants
const userInput = document.querySelector("#userInput");
const submitButton = document.getElementById("submitButton");
const tableBody = document.querySelector("#tableBody");

console.log(userInput);
console.log(submitButton);
console.log(tableBody);

// function that does my fetch request
function fetchMoviesFromAPI() {

}

// function that displays all my movies

// event listener for the button
submitButton.addEventListener("click", fetchMoviesFromAPI);