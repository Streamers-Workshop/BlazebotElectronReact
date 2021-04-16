const $ = require("jquery");

$(document).ready(() => {
  // Examples for Redirect for Trovo - https://blazebot.com/auth/trovo
  $("#signin").click(() => {
    window.location.href = "../account/account.html";
  });
});
