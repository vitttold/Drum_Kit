function playSound(e) {
  const audio = document.querySelector(`audio[code=${e.code}]`);
  const key = document.querySelector(`.key[code=${e.code}]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("play");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("play");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
