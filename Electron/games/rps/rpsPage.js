const $ = require("jquery");
const Swal = require("sweetalert2");
const fs = require("fs");
const path = require("path");
const settings = require("./rps.json");

$(document).ready(() => {
  const slider = $("#timeSlider"),
    dpPoints = $("#displayTime");

  slider.attr("step", 50);
  slider.val(settings.points);

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
});
