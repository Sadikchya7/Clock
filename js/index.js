const main = document.getElementById("main");
const clockBox = document.createElement("div");
clockBox.classList.add("clockBox");
function toTwoDigit(number) {
  return number < 10 ? "0" + number : number;
}

function clockTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  console.log(hour);
  const interval = setInterval(() => {
    let clock;
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
    }
    if (min === 60) {
      min = 0;
      hour++;
    }
    if (hour === 24) {
      hour = 0;
    }
    clock = hour + ":" + min + ":" + sec;
    clockBox.innerHTML = clock;
  }, 1000);
}
clockTime();
main.appendChild(clockBox);

const stopWatch = document.createElement("div");
stopWatch.classList.add("stopwatch");
const timer = document.createElement("div");
timer.classList.add("timer");

const buttonHolder = document.createElement("div");
buttonHolder.classList.add("buttonHolder");

const startButton = document.createElement("button");
startButton.innerHTML = "START";
const pauseButton = document.createElement("button");
pauseButton.innerHTML = "PAUSE";
const resetButton = document.createElement("button");
resetButton.innerHTML = "RE-SET";

function stopwatch() {
  // hours = hours < 10 ? "0" + hours : hours;
  let hour = 0;
  let min = 0;
  let sec = 0;
  let milisecond = 0;
  let pause = false;
  let stopwatchInterval;

  const updateTime = () => {
    // debugger;
    let timestop;
    // timestop = hour + ":" + min + ":" + sec + ":" + milisecond;
    // timer.innerHTML = timestop;
    milisecond++;
    if (milisecond === 100) {
      milisecond = 0;
      sec++;
    }
    if (sec === 60) {
      sec = 0;
      min++;
    }
    if (min === 60) {
      min = 0;
      hour++;
    }
    if (hour === 24) {
      hour = 0;
    }
    showhour = toTwoDigit(hour);
    showmin = toTwoDigit(min);
    showsec = toTwoDigit(sec);
    showmilisecond = toTowDigit(milisecond);
    // timestop = hour + ":" + min + ":" + sec + ":" + milisecond;
    timer.innerHTML = `${showhour}:${showmin}:${showsec}.${showmilisecond}`;

    // timer.innerHTML = timestop;
  };
  // setInterval()
  timestop = hour + ":" + min + ":" + sec + "." + milisecond;
  timer.innerHTML = timestop;
  startButton.addEventListener("click", () => {
    if (!pause) {
      pause = true;
      stopwatchInterval = setInterval(updateTime, 10);
    }
  });

  pauseButton.addEventListener("click", () => {
    if (pause) {
      pause = false;
      clearInterval(stopwatchInterval);
    }
  });

  resetButton.addEventListener("click", () => {
    pause = false;
    clearInterval(stopwatchInterval);
    hour = 0;
    min = 0;
    sec = 0;
    milisecond = 0;
    timestop = "00:00:00.00";
    timer.innerHTML = timestop;
  });
}
stopwatch();
stopWatch.appendChild(timer);

buttonHolder.appendChild(startButton);
buttonHolder.appendChild(pauseButton);
buttonHolder.appendChild(resetButton);
stopWatch.appendChild(buttonHolder);
main.appendChild(stopWatch);
