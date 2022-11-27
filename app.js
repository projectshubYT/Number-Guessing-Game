const button = document.getElementById("submit-button");
const userInput = document.querySelector("#user-input");

let number = Math.floor(Math.random() * 10 + 1);
let guess = 1;

button.onclick = () => {
  const value = parseInt(userInput.value);

  if (!value || value < 1 || value > 10) {
    return alert("Please enter a valid number!!!");
  }

  if (value > number) {
    alert("Oh Oh!! try with a SMALLER number :(");
    guess++;
  } else if (value < number) {
    alert("Oh Oh!! try with a GREATER number :(");
    guess++;
  } else {
    alert("Hurray!! You guessed it right in " + guess + " guess :)");
    number = Math.floor(Math.random() * 10 + 1);
    userInput.value = "";
    guess = 1;
  }
};
