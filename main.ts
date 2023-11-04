const hourEl = document.querySelector('.hour') as HTMLDivElement
const minEl = document.querySelector('.minute') as HTMLDivElement
const secEl = document.querySelector('.second') as HTMLDivElement


setInterval(() => {
  const date = new Date();
  const secDeg = (date.getSeconds() / 60) * 360 - 90;
  const minDeg = (date.getMinutes() / 60) * 360 - 90;
  const hourDeg = (date.getHours() / 12) * 360 - 90;
  secEl.style.transform = `rotate(${secDeg}deg)`;
  minEl.style.transform = `rotate(${minDeg}deg)`;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);
