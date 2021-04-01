const $ = require("jquery");
const fs = require("fs");
const path = require("path");
const Swal = require("sweetalert2");
const settings = require("../../testUsers.json");
const userArray = [];
var count = 0;

$(document).ready(() => {
  $.each(settings, (key, value) => {
    userArray.push([key, value.level, value.points, value.joined]);
  });

  const buttonTriggers = [
      $("#btnDeleteUser"),
      $("#btnDeleteAll"),
      $("#btnResetUser"),
      $("#btnResetAll"),
    ],
    userList = $("#txtList"),
    displayNum = $("#displayUserNum"),
    selectDropDown = $("#selectedOption");

  $("#displayInfo").html(
    `<div class="card">` +
      `<div class="card-header" style="text-align: center; background-color: #326D53; color: white;">${userArray[count][0]}</div>` +
      `<div class="card-body" style="text-align: center">` +
      `<p class="card-text">Level : ${userArray[count][1]}</p>` +
      `<p class="card-text">Points : ${userArray[count][2]}</p>` +
      `</div>` +
      `<div class="card-footer" style="background-color: #326D53;">` +
      `<small style="color: white;">Joined - ${userArray[count][3]}</small>` +
      `</div>` +
      `</div>`
  );

  displayNum.html(
    "List of Users - (" + (count + 1) + "/" + userArray.length + ")"
  );

  $("#previousUserID").click(() => {
    if (count === 0) {
      count = userArray.length;
    }
    count = count - 1;
    userList.val(userArray[count][0]);
    displayNum.html(
      "List of Users - (" + (count + 1) + "/" + userArray.length + ")"
    );

    $("#displayInfo").html(
      `<div class="card">` +
      `<div class="card-header" style="text-align: center; background-color: #326D53; color: white;">${userArray[count][0]}</div>` +
      `<div class="card-body" style="text-align: center">` +
      `<p class="card-text">Level : ${userArray[count][1]}</p>` +
      `<p class="card-text">Points : ${userArray[count][2]}</p>` +
      `</div>` +
      `<div class="card-footer" style="background-color: #326D53;">` +
      `<small style="color: white;">Joined - ${userArray[count][3]}</small>` +
      `</div>` +
      `</div>`
    );
  });

  $("#nextUserID").click(() => {
    count++;
    count = count % userArray.length;
    userList.val(userArray[count][0]);
    displayNum.html(
      "List of Users - (" + (count + 1) + "/" + userArray.length + ")"
    );

    $("#displayInfo").html(
      `<div class="card">` +
      `<div class="card-header" style="text-align: center; background-color: #326D53; color: white;">${userArray[count][0]}</div>` +
      `<div class="card-body" style="text-align: center">` +
      `<p class="card-text">Level : ${userArray[count][1]}</p>` +
      `<p class="card-text">Points : ${userArray[count][2]}</p>` +
      `</div>` +
      `<div class="card-footer" style="background-color: #326D53;">` +
      `<small style="color: white;">Joined - ${userArray[count][3]}</small>` +
      `</div>` +
      `</div>`
    );
  });

  buttonTriggers[0].click(() => {
    Swal.fire({
      title: "Deleting User",
      icon: "warning",
      text: `Are You Sure You Want to Delete ${userArray[count][0]}?`,
      confirmButtonText: `Delete`,
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          delete settings[userArray[count][0]];
          var deleteUser = JSON.stringify(settings, null, 2);
          fs.writeFileSync(
            path.join(__dirname, "../../../testUsers.json"),
            deleteUser
          );
          Swal.fire({
            icon: "success",
            title: "User Deleted",
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

  buttonTriggers[1].click(() => {
    Swal.fire({
      title: "Deleting All Users",
      icon: "warning",
      text: `Are You Sure You Want to Delete All Users?`,
      confirmButtonText: `Delete`,
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          var empty = {};
          var deleteAll = JSON.stringify(empty, null, 2);
          fs.writeFileSync(
            path.join(__dirname, "../../../testUsers.json"),
            deleteAll
          );
          Swal.fire({
            icon: "success",
            title: "All Data Deleted",
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

  buttonTriggers[2].click(() => {
    Swal.fire({
      title: `Reset ${$("#selectedOption option:selected").text()}`,
      icon: "warning",
      text: `Do You Want to Reset ${userArray[count][0]}'s ${$(
        "#selectedOption option:selected"
      ).text()}?`,
      confirmButtonText: `Reset`,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          switch (selectDropDown.val()) {
            case "level":
              settings[userArray[count][0]]["level"] = 1;
              settings[userArray[count][0]]["xp"] = 0;
              var resetLevel = JSON.stringify(settings, null, 2);
              fs.writeFileSync(
                path.join(__dirname, "../../../testUsers.json"),
                resetLevel
              );
              break;

            case "points":
              settings[userArray[count][0]]["points"] = 0;
              var resetPoints = JSON.stringify(settings, null, 2);
              fs.writeFileSync(
                path.join(__dirname, "../../../testUsers.json"),
                resetPoints
              );
              break;
          }

          Swal.fire({
            icon: "success",
            title: `${$("#selectedOption option:selected").text()} Reset`,
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

  buttonTriggers[3].click(() => {
    Swal.fire({
      title: `Reset All`,
      icon: "warning",
      text: `Do You Want to Reset ${userArray[count][0]}'s Points and Level?`,
      confirmButtonText: `Reset`,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          settings[userArray[count][0]]["points"] = 0;
          settings[userArray[count][0]]["xp"] = 0;
          settings[userArray[count][0]]["level"] = 0;
          var resetAll = JSON.stringify(settings, null, 2);
          fs.writeFileSync(
            path.join(__dirname, "../../../testUsers.json"),
            resetAll
          );

          Swal.fire({
            icon: "success",
            title: `All Reset`,
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
});
