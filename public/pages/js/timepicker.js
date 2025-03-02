//Load Audio
//const hoverSound = new Audio("/assets/audio/hover/hover2.mp3");
const clickSound = new Audio("/assets/audio/click/click2.wav");
const loadingSound = new Audio("/assets/audio/loading/oiia-oiia-sound.mp3");

// Function to play sound
function playSound(sound) {
    sound.currentTime = 0; 
    sound.play();
}

//Time Picker
function createTimeButtons(containerId, clickHandler, isEndTime = false) {
  let container = document.getElementById(containerId);
  container.innerHTML = ""; 

  let times = [];
  for (let h = 0; h < 24; h++) {
    let hour12 = (h % 12 === 0) ? 12 : h % 12; 
    let ampm = h < 12 ? "AM" : "PM";
    let time = `${hour12}:00 ${ampm}`;
    times.push({ time, value: h });
  }

  times.forEach(({ time, value }) => {
    let button = document.createElement("button");
    button.textContent = time;
    button.dataset.value = value; 

    button.classList.add(isEndTime ? "end-time" : "start-time", "time-btn");

    if (isEndTime) button.classList.add("disabled"); 

    button.onclick = () => {
        playSound(clickSound);
        clickHandler(time, value, button);
    };

    button.addEventListener("mouseenter", () => playSound(hoverSound)); 

    container.appendChild(button);
  });
}

let selectedStartTime = null;
let selectedEndTime = null;

function setStartTime(time, value, button) {
  selectedStartTime = value;
  selectedEndTime = null;
  document.getElementById("selectedTimeRange").innerText = "None";

  highlightSelectedButton("fromTimeButtons", button);
  enableValidEndTimes(value);
}

function setEndTime(time, value, button) {
  selectedEndTime = value;
  document.getElementById("selectedTimeRange").innerText = `${formatTime(selectedStartTime)} - ${time}`;

  highlightSelectedButton("toTimeButtons", button);
}

function enableValidEndTimes(startValue) {
  let buttons = document.getElementById("toTimeButtons").getElementsByTagName("button");
  for (let btn of buttons) {
    let btnValue = parseInt(btn.dataset.value);
    if (btnValue > startValue) {
      btn.disabled = false;
      btn.classList.remove("disabled");
    } else {
      btn.disabled = true;
      btn.classList.add("disabled");
    }
  }
}

function highlightSelectedButton(containerId, selectedBtn) {
  let buttons = document.getElementById(containerId).getElementsByTagName("button");
  for (let btn of buttons) {
    btn.classList.remove("selected");
  }
  selectedBtn.classList.add("selected");
}

function formatTime(value) {
  let hour12 = (value % 12 === 0) ? 12 : value % 12;
  let ampm = value < 12 ? "AM" : "PM";
  return `${hour12}:00 ${ampm}`;
}

// Initialize buttons
createTimeButtons("fromTimeButtons", setStartTime);
createTimeButtons("toTimeButtons", setEndTime, true);
  