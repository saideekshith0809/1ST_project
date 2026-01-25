// Messages that appear when NO is clicked
const messages = [
  "Are you sure?",
  "Really sure?",
  "Think again 😢",
  "Last chance!",
  "Just say yes ❤️"
];

let messageIndex = 0;      // Which message to show next
let noClickCount = 0;      // How many times NO was clicked

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  const gif = document.getElementById("reactionGif");

  // Increase NO click count
  noClickCount++;

  // Change the NO button's text
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Make the YES button bigger every time
  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = `${currentSize * 1.5}px`;

  // Show the GIF only when NO is clicked the second time
  if (noClickCount === 1) {
    gif.classList.remove("hidden");
    gif.src = gif.src; // this restarts the GIF animation
  }
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
