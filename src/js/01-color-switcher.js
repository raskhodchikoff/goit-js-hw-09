const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor(color) {
  document.body.style.backgroundColor = color;
}

class ColorSwitcher {
  constructor(changeColor) {
    this.intervalID = null;
    this.isActive = false;
    this.changeColor = changeColor;
    refs.stopBtn.disabled = true;
  }

  start() {
    if (this.isActive) {
      return;
    }

    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;

    this.isActive = true;
    this.intervalID = setInterval(() => changeColor(getRandomHexColor()), 1000);
  }

  stop() {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;

    clearInterval(this.intervalID);
    this.isActive = false;
  }
}

const colorSwitcher = new ColorSwitcher();

refs.startBtn.addEventListener(
  'click',
  colorSwitcher.start.bind(colorSwitcher)
);
refs.stopBtn.addEventListener('click', colorSwitcher.stop.bind(colorSwitcher));
