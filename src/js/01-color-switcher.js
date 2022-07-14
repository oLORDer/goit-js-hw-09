
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', changeColor);
btnStop.addEventListener('click', stopColor);

function changeColor(e) {
  if(btnStart.classList.contains('active')) {
    return;
  }

  btnStart.classList.add('active');

  change()
}
let timerId = null;
const change = () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function stopColor() {
  btnStart.classList.remove('active');
  clearInterval(timerId)
}


// rgb(96, 37, 36)
// rgb(152, 45, 55)
console.log(btnStart);