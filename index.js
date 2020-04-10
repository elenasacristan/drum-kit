let drums = document.querySelectorAll(".drum");

let crash = new Audio("sounds/crash.mp3");
let kick = new Audio("sounds/kick-bass.mp3");
let snare = new Audio("sounds/snare.mp3");
let tom1 = new Audio("sounds/tom-1.mp3");
let tom2 = new Audio("sounds/tom-2.mp3");
let tom3 = new Audio("sounds/tom-3.mp3");
let tom4 = new Audio("sounds/tom-4.mp3");

// detecting button press
for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    buttonInnerHTML = this.innerHTML;
    play(buttonInnerHTML);
    animation(buttonInnerHTML);
  });
}

// detecting key press
document.addEventListener("keydown", function (event) {
  play(event.key);
  animation(event.key);
});

function play(letter) {
  switch (letter) {
    case "w":
      crash.play();
      break;
    case "a":
      kick.play();
      break;
    case "s":
      snare.play();
      break;
    case "d":
      tom1.play();
      break;
    case "j":
      tom2.play();
      break;
    case "k":
      tom3.play();
      break;
    case "l":
      tom4.play();
      break;

    default:
      console.log(letter);
  }
}

function animation(letter) {
  document.querySelector("." + letter).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + letter).classList.remove("pressed");
  }, 100);
}
