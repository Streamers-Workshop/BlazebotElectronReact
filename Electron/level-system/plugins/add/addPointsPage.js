const fs = require("fs");
const path = require("path");
const $ = require("jquery");
const Swal = require("sweetalert2");
const settings = require("./add.json");

$(document).ready(() => {
  const slider = $("#timeSlider"),
    toggleSwitch = $("#toggleActivate");

  slider.attr("step", 250);
  toggleSwitch.prop("checked", settings.active);
  slider.val(settings.limitPoints);

  $("#displayTime").html("Limit Points - " + slider.val());

  slider.on("input", () => {
    $("#displayTime").html("Limit Points - " + slider.val());
  });

  const buttonTriggers = [$("#btnAdd"), $("#btnRemove"), $("#btnUpdateTime")],
    selectRole = $("#selectRoleID");

  buttonTriggers[0].click(() => {
    alert(selectRole.val());
  });

  buttonTriggers[1].click(() => {
    alert("delete");
  });

  buttonTriggers[2].click(() => {
    try {
      settings.limitPoints = parseInt(slider.val());
      var updateLimitValue = JSON.stringify(settings, null, 2);
      fs.writeFileSync(path.join(__dirname, "./add.json"), updateLimitValue);
      Swal.fire({
        icon: "success",
        title: "Limit Points Updated",
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
          fs.writeFileSync(path.join(__dirname, "./add.json"), trueValue);
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
          fs.writeFileSync(path.join(__dirname, "./add.json"), falseValue);
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
