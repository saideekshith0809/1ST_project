const messages = [
  "nokodhuuu antey nokinavvuuuu 😭",
  "Nijangaa naa!😭",
  "pakkaaa naa???",
  "Inkoskari alochinchuuu 😢",
  "Last timee igaa",
  "peeehhhhhhh!!!😒😒",
  "YES click chesthe magic jaruguthundiii ✨",
  "yess cheppalsindheyy❤️",
  "Naa kosam kuda kaadhaa 😢",
  "Cheppesaav le… YES anee 😁"
];

let messageIndex = 0;
let noClickCount = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  const gif = document.getElementById("reactionGif");

  noClickCount++;

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // FAST YES BUTTON GROWTH 🔥
  const size = parseFloat(getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = size * 1.6 + "px";

  if (noClickCount === 1) {
    gif.classList.remove("hidden");
    gif.src = "gifs/no.gif";
  }
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

// ========= FLOWERS FALLING ON INDEX PAGE =========
const container = document.getElementById("flowers-container");
const emojis = ["🌸", "🌹", "🌺", "💐", "🌼", "🌷", "💗", "❤️", "💕", "💖"];

function createFlower() {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  const startX = Math.random() * 100;
  flower.style.left = startX + "vw";

  const isBig = Math.random() > 0.6;
  const fontSize = isBig
    ? 50 + Math.random() * 25
    : 20 + Math.random() * 15;
  flower.style.fontSize = fontSize + "px";

  const duration = isBig
    ? 10 + Math.random() * 5
    : 6 + Math.random() * 3;

  const rotationDirection = Math.random() > 0.5 ? 1 : -1;
  const rotationAmount = 180 + Math.random() * 360;

  const windAmount = 40 + Math.random() * 80;
  const windDirection = Math.random() > 0.5 ? 1 : -1;

  const animName = `fall-${Date.now()}-${Math.random()}`;
  flower.style.animation = `${animName} ${duration}s linear forwards`;

  const styleSheet = document.styleSheets[0];
  const keyframes = `
    @keyframes ${animName} {
      0% {
        transform: translateY(0) translateX(0) rotate(0deg);
        opacity: 0.9;
      }
      50% {
        transform: translateY(50vh) translateX(${windDirection * windAmount}px) rotate(${rotationDirection * rotationAmount / 2}deg);
        opacity: 1;
      }
      100% {
        transform: translateY(120vh) translateX(0) rotate(${rotationDirection * rotationAmount}deg);
        opacity: 0;
      }
    }
  `;
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  container.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, duration * 1000);
}

// Start flowers immediately on index page
setInterval(createFlower, 400);
