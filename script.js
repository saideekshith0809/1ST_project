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

function handleYesHover() {
  // Time slows when hovering YES
  document.body.classList.add('time-slow');
  
  // Intensify love aura
  const aura = document.querySelector('.love-aura');
  if (aura) {
    aura.style.transform = 'scale(1.5)';
    aura.style.opacity = '0.8';
  }
}

function handleYesClick() {
  // Emotional transition - time stops
  document.body.classList.add('time-freeze');
  
  // Transition to warm colors
  document.body.classList.add('love-bloom');
  
  setTimeout(() => {
    window.location.href = "yes_page.html";
  }, 1000);
}

// Create destiny lines connecting elements
function createDestinyLines() {
  const svg = document.querySelector('.destiny-lines');
  const hearts = document.querySelectorAll('.destiny-heart');
  const stars = document.querySelectorAll('.destiny-star');
  
  function updateLines() {
    // Clear existing lines
    while (svg.children.length > 1) { // Keep gradient def
      svg.removeChild(svg.lastChild);
    }
    
    // Connect hearts and stars with destiny lines
    const elements = [...hearts, ...stars];
    for (let i = 0; i < elements.length - 1; i++) {
      if (Math.random() > 0.5) {
        const elem1 = elements[i].getBoundingClientRect();
        const elem2 = elements[i + 1].getBoundingClientRect();
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', elem1.left + elem1.width / 2);
        line.setAttribute('y1', elem1.top + elem1.height / 2);
        line.setAttribute('x2', elem2.left + elem2.width / 2);
        line.setAttribute('y2', elem2.top + elem2.height / 2);
        line.setAttribute('stroke', 'url(#lineGradient)');
        line.setAttribute('stroke-width', '1');
        line.style.opacity = '0.3';
        svg.appendChild(line);
      }
    }
  }
  
  updateLines();
  setInterval(updateLines, 3000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  createDestinyLines();
  
  // Remove time-slow effect when mouse leaves YES button
  const yesButton = document.querySelector('.yes-button');
  yesButton.addEventListener('mouseleave', function() {
    document.body.classList.remove('time-slow');
    const aura = document.querySelector('.love-aura');
    if (aura) {
      aura.style.transform = 'scale(1)';
      aura.style.opacity = '0.5';
    }
  });
});
