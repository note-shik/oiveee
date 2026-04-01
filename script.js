const lines = [
  "Initializing Oivee...",
  "Analyzing your business...",
  "Turning visitors into customers."
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    const currentLine = document.getElementById("line" + (lineIndex + 1));

    if (charIndex < lines[lineIndex].length) {
      currentLine.innerHTML += lines[lineIndex].charAt(charIndex);
      charIndex++;

      // random typing speed
      let speed = Math.random() * 40 + 20;
      setTimeout(typeLine, speed);

    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 500);
    }
  } else {
    reveal();
  }
}

function reveal() {
  const sub = document.getElementById("subtext");
  const btn = document.getElementById("cta");

  sub.style.opacity = 1;
  sub.style.transform = "translateY(0)";

  setTimeout(() => {
    btn.style.opacity = 1;
    btn.style.transform = "translateY(0)";
  }, 400);

  idlePulse();
}

function idlePulse() {
  const btn = document.getElementById("cta");

  setInterval(() => {
    btn.style.transform = "scale(1.03)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 800);
  }, 4000);
}

typeLine();
