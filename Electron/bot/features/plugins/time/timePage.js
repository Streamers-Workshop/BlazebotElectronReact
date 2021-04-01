const $ = require("jquery");
const fs = require("fs");
const path = require("path");
const Swal = require("sweetalert2");
const settings = require("./time.json");

$(document).ready(() => {
  var time = new Date(),
    toggleSwitch = $("#toggleActivate");

  function showTime() {
    time = new Date().toLocaleTimeString();
    $("#time").html(time);
  }

  showTime();

  setInterval(() => {
    showTime();
  }, 1000);

  toggleSwitch.prop("checked", settings.active);

  toggleSwitch.change((select) => {
    var toggleChange = $(select.currentTarget).prop("checked");
    switch (toggleChange) {
      case true:
        try {
          settings.active = true;
          var trueValue = JSON.stringify(settings, null, 2);
          fs.writeFileSync(path.join(__dirname, "./time.json"), trueValue);
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please Try Again Later!",
          });
        }

        break;

      case false:
        try {
          settings.active = false;
          var falseValue = JSON.stringify(settings, null, 2);
          fs.writeFileSync(path.join(__dirname, "./time.json"), falseValue);
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please Try Again Later!",
          });
        }
        break;
    }
  });
});
