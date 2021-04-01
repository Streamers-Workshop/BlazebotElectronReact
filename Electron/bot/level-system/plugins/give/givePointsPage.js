const $ = require("jquery");
const Swal = require("sweetalert2");
const fs = require("fs");
const path = require("path");
const settings = require("./give.json");
const userData = require("../../../testUsers.json");
var userArray = [];
var count = 0;

$(document).ready(() => {
  const slider = $("#timeSlider"),
    toggleSwitch = $("#toggleActivate"),
    placeUser = $("#txtUser"),
    buttonTrigger = [$("#btnEnable"), $("#btnDisable"), $("#btnUpdateGive")];

  slider.attr("step", 250);
  slider.val(settings.limitPoints);

  $("#displayPoints").html("Limit Points - " + slider.val());
  toggleSwitch.prop("checked", settings.active);
  slider.on("input", () => {
    $("#displayPoints").html("Limit Points - " + slider.val());
  });

  $.each(userData, (user) => {
    userArray.push(user);
  });

  placeUser.val(
    userArray[count] +
      "\n" +
      "Give Points : " +
      userData[userArray[count]]["giveEnabled"]
  );

  buttonTrigger[0].click(() => {
    Swal.fire({
      title: `${buttonTrigger[0].text()} Given Points`,
      icon: "warning",
      text: `You Want to Enable ${userArray[count]} to Give Points?`,
      confirmButtonText: `Enable`,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          userData[userArray[count]]["giveEnabled"] = true;
          var enableGiven = JSON.stringify(userData, null, 2);
          fs.writeFileSync(
            path.join(__dirname, "../../../testUsers.json"),
            enableGiven
          );
          Swal.fire({
            icon: "success",
            title: "Given Points Enalbed",
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
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
      }
    });
  });

  buttonTrigger[1].click(() => {
    Swal.fire({
      title: `${buttonTrigger[1].text()} Given Points`,
      icon: "warning",
      text: `You Want to Disable ${userArray[count]} to Give Points?`,
      confirmButtonText: `Disable`,
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          userData[userArray[count]]["giveEnabled"] = false;
          var disableGiven = JSON.stringify(userData, null, 2);
          fs.writeFileSync(
            path.join(__dirname, "../../../testUsers.json"),
            disableGiven
          );
          Swal.fire({
            icon: "success",
            title: "Given Points Disable",
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
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
      }
    });
  });

  buttonTrigger[2].click(() => {
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

  $("#previousUserID").click(() => {
    if (count === 0) {
      count = userArray.length;
    }
    count = count - 1;
    placeUser.val(
      userArray[count] +
        "\n" +
        "Give Points : " +
        userData[userArray[count]]["giveEnabled"]
    );
  });

  $("#nextUserID").click(() => {
    count++;
    count = count % userArray.length;
    placeUser.val(
      userArray[count] +
        "\n" +
        "Give Points : " +
        userData[userArray[count]]["giveEnabled"]
    );
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
