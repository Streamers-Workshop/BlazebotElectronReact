const $ = require("jquery");
const fs = require("fs");
const path = require("path");
const Swal = require("sweetalert2");
const settings = require("./points.json");

$(document).ready(() => {
  const slider = $("#timeSlider"),
    messagePoints = $("#pointsMessage"),
    toggleSwitch = $("#toggleActivate"),
    editCheck = $("#editMsgPoints");

  toggleSwitch.prop("checked", settings.active);

  slider.attr("step", 5);
  slider.val(settings.points);
  messagePoints.val("test");

  editCheck.change((select) => {
    var editChecked = $(select.currentTarget).prop("checked");
    switch (editChecked) {
      case true:
        messagePoints.prop("disabled", false);
        break;

      case false:
        messagePoints.prop("disabled", true);
        break;
    }
  });

  $("#displayPoints").html("Chat Process Points - " + slider.val());
  slider.on("input", () => {
    $("#displayPoints").html("Chat Process Points - " + slider.val());
  });

  $("#btnMessageUpdate").click(() => {
    if (editCheck.prop("checked")) {
    } else {
      Swal.fire({
        icon: "info",
        title: "Unable to Edit",
        text: "Enable Checkbox to Edit Message!",
      });
    }
  });

  $("#btnDefault").click(() => {
    if (editCheck.prop("checked")) {
      messagePoints.val(settings.defaultMessage);
    } else {
      Swal.fire({
        icon: "info",
        title: "Unable to Edit",
        text: "Enable Checkbox to Edit Message!",
      });
    }
  });

  $("#btnProcessPoints").click(() => {
    try {
      settings.points = parseInt(slider.val());
      var updatePoints = JSON.stringify(settings, null, 2);
      fs.writeFileSync(path.join(__dirname, "./points.json"), updatePoints);
      Swal.fire({
        icon: "success",
        title: "Points Process Updated",
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
          fs.writeFileSync(path.join(__dirname, "./points.json"), trueValue);
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
          fs.writeFileSync(path.join(__dirname, "./points.json"), falseValue);
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
