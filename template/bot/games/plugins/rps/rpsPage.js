const $ = require("jquery");
const Swal = require("sweetalert2");
const fs = require("fs");
const path = require("path");
const settings = require("./rps.json");

$(document).ready(() => {
  const slider = $("#timeSlider"),
    dpPoints = $("#displayTime"),
    toggleSwitch = $("#toggleActivate");

  slider.attr("step", 50);
  slider.val(settings.points);
  toggleSwitch.prop("checked", settings.active);

  dpPoints.html("Winner Points Set - <b>" + slider.val() + " Points</b>");

  slider.on("input", () => {
    dpPoints.html("Winner Points Set - <b>" + slider.val() + " Points</b>");
  });

  $("#btnUpdatePoints").click(() => {
    try {
      settings.points = parseInt(slider.val());
      var updatePointSet = JSON.stringify(settings, null, 2);
      fs.writeFileSync(path.join(__dirname, "./rps.json"), updatePointSet);
      Swal.fire({
        icon: "success",
        title: "Time Updated",
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
          fs.writeFileSync(path.join(__dirname, "./rps.json"), trueValue);
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
          fs.writeFileSync(path.join(__dirname, "./rps.json"), falseValue);
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
