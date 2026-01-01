let current = 1;
let flipped = 0;

/* Remove intro */
window.onload = () => {
  setTimeout(() => {
    document.getElementById("magic-intro").style.display = "none";
  }, 3500);
};

/* Mouse sparkle */
document.addEventListener("mousemove", e => {
  const s = document.createElement("div");
  s.className = "spark";
  s.style.left = e.clientX + "px";
  s.style.top = e.clientY + "px";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 1000);
});

function nextScreen() {
  document.getElementById(`screen-${current}`).classList.remove("active");
  current++;
  document.getElementById(`screen-${current}`).classList.add("active");
}

function openEnvelope() {
  document.querySelector(".envelope-box").classList.add("open");
  setTimeout(nextScreen, 1200);
}

function flipWish(card) {
  if (card.classList.contains("done")) return;
  card.classList.add("done");
  flipped++;

  if (flipped === 3) {
    fireworks();
    setTimeout(nextScreen, 1200);
  }
}

function fireworks() {
  for (let i = 0; i < 80; i++) {
    const f = document.createElement("div");
    f.className = "spark";
    f.style.left = Math.random() * window.innerWidth + "px";
    f.style.top = Math.random() * window.innerHeight + "px";
    f.style.background =
      ["gold","hotpink","cyan","violet"][Math.floor(Math.random()*4)];
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1200);
  }
}

function restart() {
  location.reload();
}
