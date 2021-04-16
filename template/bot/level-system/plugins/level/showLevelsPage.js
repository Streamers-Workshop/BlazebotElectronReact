const $ = require("jquery");
const Swal = require("sweetalert2");
const fs = require("fs");
const path = require("path");
const settings = require("./level.json");

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

$(document).ready(() => {
  const slider = $("#timeSlider"),
    toggleSwitch = $("#toggleActivate"),
    messageLvl = $("#levelMessage"),
    editCheck = $("#editMsgLevel");
  toggleSwitch.prop("checked", settings.active);

  slider.attr("step", 2);
  slider.val(settings.xp);
  messageLvl.val("message");

  editCheck.change((select) => {
    var editChecked = $(select.currentTarget).prop("checked");
    switch (editChecked) {
      case true:
        messageLvl.prop("disabled", false);
        break;

      case false:
        messageLvl.prop("disabled", true);
        break;
    }
  });

  $("#displayXP").html("Chat Process XP - " + slider.val());
  slider.on("input", () => {
    $("#displayXP").html("Chat Process XP - " + slider.val());
  });

  $("#btnMessageUpdate").click(() => {
    if (editCheck.prop("checked")) {
      if (isEmptyOrSpaces(messageLvl.val())) {
        Swal.fire({
          icon: "error",
          title: "Empty Field",
          text: "Please Fill Required Field",
        });
      } else if (messageLvl.val().length >= 150) {
        Swal.fire({
          icon: "error",
          title: "Message Exceeded",
          text: "Make sure Message is not over 150 characters!",
        });
      } else {
        //updateMessage
      }
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
      messageLvl.val(settings.defaultMessage);
    } else {
      Swal.fire({
        icon: "info",
        title: "Unable to Edit",
        text: "Enable Checkbox to Edit Message!",
      });
    }
  });

  $("#btnProcessXP").click(() => {
    try {
      settings.xp = parseInt(slider.val());
      var updateXP = JSON.stringify(settings, null, 2);
      fs.writeFileSync(path.join(__dirname, "./level.json"), updateXP);
      Swal.fire({
        icon: "success",
        title: "XP Process Updated",
        allowOutsideClick: false,
        text: `Updated to ${slider.val()} XP.`,
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
          fs.writeFileSync(path.join(__dirname, "./level.json"), trueValue);
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
          fs.writeFileSync(path.join(__dirname, "./level.json"), falseValue);
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
