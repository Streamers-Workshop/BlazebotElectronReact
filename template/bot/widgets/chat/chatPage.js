const $ = require("jquery");
const electron = require("electron");
const path = require("path");

$(document).ready(() => {
  $("#preview").click(() => {
    electron.shell.openPath(path.join(__dirname, "server-side/test2.html"));
  });
});
