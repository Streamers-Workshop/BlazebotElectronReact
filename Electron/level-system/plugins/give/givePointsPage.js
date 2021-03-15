const $ = require("jquery");
const Swal = require("sweetalert2");
const fs = require("fs");
const path = require("path");
const settings = require("./give.json");

$(document).ready(() => {
  const slider = $("#timeSlider"),
    toggleSwitch = $("#toggleActivate");
  slider.attr("step", 250);
  slider.val(settings.limitPoints);

  $("#displayTime").html("Limit Points - " + slider.val());
  toggleSwitch.prop("checked", settings.active);
  slider.on("input", () => {
    $("#displayTime").html("Limit Points - " + slider.val());
  });

  $("#btnUpdateGive").click(() => {
    try {
      settings.limitPoints = parseInt(slider.val());
      var updatePoints = JSON.stringify(settings, null, 2);
      fs.writeFileSync(path.join(__dirname, "./give.json"), updatePoints);
      Swal.fire({
        icon: "success",
        title: "Limit Give Points Updated",
        allowOutsideClick: false,
        text: `Updated to ${slider.val()} Points.`,
      }).then((result) => {
        if (result) {
          window.location.reload();
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please Try Again Later!",
      });
    }
  });

  toggleSwitch.change((select) => {
    var toggleChange = $(select.currentTarget).prop("checked");
    switch (toggleChange) {
      case true:
        try {
          settings.active = true;
          var trueValue = JSON.stringify(settings, null, 2);
          fs.writeFileSync(path.join(__dirname, "./give.json"), trueValue);
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
          fs.writeFileSync(path.join(__dirname, "./give.json"), falseValue);
          break;
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please Try Again Later!",
          });
        }
    }
  });
});
