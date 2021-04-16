const $ = require("jquery");
const fs = require("fs");
const path = require("path");
const settings = require("./hydrate.json");
const Swal = require("sweetalert2");

//const minutes = settings.hydrateTime;
//const timeBetweenMessage = minutes * 60 * 1000;

$(document).ready(() => {
  const slider = $("#timeSlider"),
    dpTime = $("#displayTime"),
    toggleSwitch = $("#toggleActivate");

  toggleSwitch.prop("checked", settings.active);

  slider.attr("step", 5);
  slider.val(settings.hydrateTime);

  $("#displayTime").html(
    `Hydrate Time Reminder - <b>${settings.hydrateTime} min</b>`
  );

  slider.on("input", () => {
    dpTime.html("Hydrate Time Reminder - <b>" + slider.val() + " min</b>");
  });

  $("#btnUpdateTime").click(() => {
    try {
      settings.hydrateTime = parseInt(slider.val());
      var updateTimer = JSON.stringify(settings, null, 2);
      fs.writeFileSync(path.join(__dirname, "./hydrate.json"), updateTimer);
      Swal.fire({
        icon: "success",
        title: "Time Updated",
        allowOutsideClick: false,
        text: `Updated to ${slider.val()} minutes.`,
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
          fs.writeFileSync(path.join(__dirname, "./hydrate.json"), trueValue);
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
          fs.writeFileSync(path.join(__dirname, "./hydrate.json"), falseValue);
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
