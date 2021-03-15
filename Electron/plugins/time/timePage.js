const $ = require("jquery");

$(document).ready(() => {
  var time = new Date();

  function showTime() {
    time = new Date().toLocaleTimeString();
    $("#time").html(time);
  }

  showTime();

  setInterval(() => {
    showTime();
  }, 1000);
});
