var hourEl = document.querySelector('.hour');
var minEl = document.querySelector('.minute');
var secEl = document.querySelector('.second');
setInterval(function () {
    var date = new Date();
    var secDeg = (date.getSeconds() / 60) * 360 - 90;
    var minDeg = (date.getMinutes() / 60) * 360 - 90;
    var hourDeg = (date.getHours() / 12) * 360 - 90;
    secEl.style.transform = "rotate(".concat(secDeg, "deg)");
    minEl.style.transform = "rotate(".concat(minDeg, "deg)");
    hourEl.style.transform = "rotate(".concat(hourDeg, "deg)");
}, 1000);
