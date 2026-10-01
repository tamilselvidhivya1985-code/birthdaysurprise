function openSurprise() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("birthday").classList.remove("hidden");

  createConfetti();
}

function showSection(sectionId) {
  const sections = document.querySelectorAll(".screen");

  sections.forEach(function(section) {
    section.classList.add("hidden");
  });

  document.getElementById(sectionId).classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (sectionId === "chaos") {
    createConfetti();
  }
}

function createConfetti() {
  const container = document.getElementById("confetti");

  if (!container) return;

  const symbols = ["♡", "✦", "✧", "♥", "•"];

  for (let i = 0; i < 25; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti-piece";

    piece.innerText =
      symbols[Math.floor(Math.random() * symbols.length)];

    piece.style.left = Math.random() * 100 + "%";

    piece.style.animationDelay =
      Math.random() * 2 + "s";

    piece.style.fontSize =
      12 + Math.random() * 15 + "px";

    container.appendChild(piece);

    setTimeout(function() {
      piece.remove();
    }, 6000);
  }
}

function makeItRain() {
  showSection("final");

  const symbols = ["♡", "♥", "✦", "✧", "🎀"];

  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");

    heart.innerText =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize =
      15 + Math.random() * 25 + "px";

    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    heart.style.transition =
      "transform 4s linear, opacity 4s linear";

    document.body.appendChild(heart);

    setTimeout(function() {
      heart.style.transform =
        "translateY(110vh) rotate(360deg)";

      heart.style.opacity = "0";
    }, 50);

    setTimeout(function() {
      heart.remove();
    }, 4500);
  }
}
