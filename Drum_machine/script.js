const pads = document.querySelectorAll(".drum-pad");
const disp = document.getElementById("display");

function playSound(audioElement, isKeyboard = false) {
  if (!audioElement) return;

  audioElement.currentTime = 0;

  // Exécute la lecture sans bloquer la promesse
  const playPromise = audioElement.play();
  if (playPromise !== undefined) {
    playPromise.catch((err) => {});
  }

  if (audioElement.parentElement) {
    disp.innerText = audioElement.parentElement.id;
  }

  // animation for keydown
  if (isKeyboard && audioElement.parentElement) {
    const button = audioElement.parentElement;
    button.classList.add("active");
    setTimeout(() => {
      button.classList.remove("active");
    }, 150);
  }
}

// click
pads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector("audio");
    playSound(audio);
  });
});

// keydown
document.addEventListener("keydown", (e) => {
  let key = "";

  if (e.key) {
    key = e.key.toUpperCase();
  } else if (e.keyCode) {
    key = String.fromCharCode(e.keyCode).toUpperCase();
  }

  const audio = document.getElementById(key);

  if (audio) {
    playSound(audio, true);
  }
});
