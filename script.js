// console.log("hello world");

setInterval(function () {
  const timecontainer = document.getElementById("time-container");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let am_pm;
  if (hours > 12) {
    am_pm = " PM";
  } else {
    am_pm = " AM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  timecontainer.innerText = hours + ":" + minutes + ":" + seconds + am_pm;
}, 1000);
