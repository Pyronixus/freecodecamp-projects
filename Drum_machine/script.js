const pads = document.querySelectorAll(".drum-pad");
const disp = document.getElementById("display");

// play sound
function playSound(audioElement, isKeyboard = false) {
  if (!audioElement) return;

  audioElement.currentTime = 0;
  audioElement.play();

  const soundName = audioElement.parentElement.id;
  disp.innerText = soundName;

  // animation for keydown like on click
  if (isKeyboard) {
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
window.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const audio = document.getElementById(key);

  if (audio) {
    playSound(audio, true);
  }
});