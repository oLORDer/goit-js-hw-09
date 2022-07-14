'use strict';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const btnStart = document.querySelector('[data-start]');
const deadline = document.querySelector('#datetime-picker');
const daysVal = document.querySelector('[data-days]');
const hoursVal = document.querySelector('[data-hours]');
const minutessVal = document.querySelector('[data-minutes]');
const secondsVal = document.querySelector('[data-seconds]');


flatpickr(deadline, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      timer.isStartActive = true;
      // btnStart.desabled = false;
      Notiflix.Notify.success('its correct data');
    } else {
      // btnStart.desabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
});

const timer = {
  intervalId: null,
  isStartActive: false,

  start(deadline) {
    if (!this.isStartActive) {
      return;
    }
    this.intervalId = setInterval(() => {
      const now = Date.now();
      const diff = deadline - now;

      if (diff <= 999) {
        this.stop();
      }

      const { days, hours, minutes, seconds } = convertMs(diff);
      daysVal.textContent = this.pad(days);
      hoursVal.textContent = this.pad(hours);
      minutessVal.textContent = this.pad(minutes);
      secondsVal.textContent = this.pad(seconds);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  pad(value) {
    return String(value).padStart(2, 0);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

btnStart.addEventListener('click', () => timer.start(new Date(deadline.value)));

// console.log(btnStart)
