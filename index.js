import convertToPiglatin from "./piglatin";
console.log(convertToPiglatin('translate'))

const textInput = document.getElementById("textInput");
const textOutput = document.getElementById("textOutput");
const button = document.getElementById("button");
const pigButton = document.getElementById("pigButton");
const resetButton = document.getElementById("reset");
const sound = new Audio("oink.wav");
const sound2 = new Audio("squeal.wav");

let input = "";

textInput.addEventListener("keyup", (e) => {
  return (input = e.target.value);
});

const translateToPigLatin = () => {
  const words = input.split(" ");
  const output = words.map((word) => convertToPiglatin(word)).join(" ");
  textOutput.innerText = output;
  sound.play();
  sound.currentTime = 0;
  return output;
}; 

button.addEventListener("click", (e) => {
    let words = input.split(" ");
    let pigWord = words.map(word => convertToPiglatin(word)).join(" ");
    textOutput.innerText = pigWord
});

resetButton.addEventListener("click", (e) => {
  textInput.value = "";
  textOutput.innerText = "";
  input = "";
  sound2.play();
  sound2.currentTime = 0;
});

pigButton.addEventListener("mousedown", (e) => {
  pigButton.classList.remove("pig-button");
  pigButton.classList.add("pig-button2");
});

pigButton.addEventListener("mouseup", (e) => { 
  pigButton.classList.remove("pig-button2");
  pigButton.classList.add("pig-button");
});

// console.log(translateToPigLatin(input));
