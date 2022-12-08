const newYear = "01 01 2023";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countdown() {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();
  const totalSecond = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSecond / 86400);
  const hours = Math.floor((totalSecond / 3600) % 24);
  const minutes = Math.floor((totalSecond / 60) % 60);
  const seconds = Math.floor(totalSecond % 60);

  daysEl.innerHTML = formateDate(days);
  hoursEl.innerHTML = formateDate(hours);
  minutesEl.innerHTML = formateDate(minutes);
  secondsEl.innerHTML = formateDate(seconds);

  // console.log(days, hours, minutes, seconds);
}

function formateDate(date) {
  return date < 10 ? `0${date}` : date;
}

//intial call
countdown();

setInterval(countdown, 1000);
