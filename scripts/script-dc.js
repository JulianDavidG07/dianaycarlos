//contador casados
const end = new Date("Mar 19, 2023 15:00:00").getTime();
const dayEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

const x = setInterval(function () {
  let now = new Date().getTime();
  const difference = end - now;

  if (difference < 0) {
    clearInterval(x);
    document.getElementById("done").innerHTML = "💍Ya somos esposos💍";
    document.querySelector("#countdown ul").style.display = "none";
    document.querySelector("#diana-carlos").style.display = "none";
    return;
  }

  dayEl.innerText = Math.floor(difference / days);
  hoursEl.innerText = Math.floor((difference % days) / hours);
  minutesEl.innerText = Math.floor((difference % hours) / minutes);
  secondsEl.innerText = Math.floor((difference % minutes) / seconds);
}, seconds);




/***************** Script boton musica ********************** */
var track = document.getElementById("track");

var controlBtn = document.getElementById("play-pause");

function playPause() {
  if (track.paused) {
    track.play();
    //controlBtn.textContent = "Pause";
    controlBtn.className = "pause";
  } else {
    track.pause();
    //controlBtn.textContent = "Play";
    controlBtn.className = "play";
  }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function () {
  controlBtn.className = "play";
});

