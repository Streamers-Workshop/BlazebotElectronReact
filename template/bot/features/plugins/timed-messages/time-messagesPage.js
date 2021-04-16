const fs = require("fs");
const path = require("path");
const $ = require("jquery");
const Swal = require("sweetalert2");
const settings = require("./timed-messages.json");

var count = 0;

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

$(document).ready(() => {
  const slider = $("#timeSlider"),
    listMsg = $("#listMessage"),
    newMessage = $("#txtNewMessage"),
    valueMsg = $("#valueMsg"),
    dpTime = $("#displayTime"),
    checkBox = $("#EditMsg"),
    toggleSwitch = $("#toggleActivate"),
    btnFunctions = [
      $("#btnAddClick"),
      $("#btnDeleteClick"),
      $("#btnEditClick"),
      $("#btnUpdateTime"),
    ];

  toggleSwitch.prop("checked", settings.active);

  slider.attr("step", 5);

  slider.val(settings.timer);

  listMsg.val(settings.messages[count]);
  valueMsg.html("List of Timed Messages (Edit/Delete) - # " + (count + 1));

  dpTime.html("Timer Set - <b>" + slider.val() + " min</b>");

  slider.on("input", () => {
    dpTime.html("Timer Set - <b>" + slider.val() + " min</b>");
  });

  $("#previousMessage").click(() => {
    if (count === 0) {
      count = settings.messages.length;
    }
    count = count - 1;
    listMsg.val(settings.messages[count]);
    valueMsg.html("List of Timed Messages (Edit/Delete) - # " + (count + 1));
  });

  $("#nextMessage").click(() => {
    count++;
    count = count % settings.messages.length;
    listMsg.val(settings.messages[count]);
    valueMsg.html("List of Timed Messages (Edit/Delete) - # " + (count + 1));
  });

  btnFunctions[0].click(() => {
    if (isEmptyOrSpaces(newMessage.val())) {
      Swal.fire({
        icon: "error",
        title: "Empty Field",
        text: "Please Fill Required Field",
      });
    } else if (newMessage.val().length >= 300) {
      Swal.fire({
        icon: "error",
        title: "Message Exceeded",
        text: "Make sure Message is not over 300 characters!",
      });
    } else {
      try {
        Swal.fire({
          icon: "success",
          title: "New Timed Message Added",
          allowOutsideClick: false,
        }).then((result) => {
          if (result) {
            window.location.reload();
          }
        });
        settings.messages.push(newMessage.val().trim());
        var addNewMsg = JSON.stringify(settings, null, 2);
        fs.writeFileSync(
          path.join(__dirname, "./timed-messages.json"),
          addNewMsg
        );
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please Try Again Later!",
        });
      }
    }
  });

  btnFunctions[1].click(() => {
    Swal.fire({
      title: "Deleting Message",
      icon: "warning",
      text: `Do you want to delete '# ${count + 1}' Message?`,
      confirmButtonText: `Delete`,
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          settings.messages.splice(count, 1);
          var deleteTimeMsg = JSON.stringify(settings, null, 2);
          fs.writeFileSync(
            path.join(__dirname, "./timed-messages.json"),
            deleteTimeMsg
          );
          Swal.fire({
            icon: "success",
            title: "Message Deleted",
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

  btnFunctions[2].click(() => {
    if (checkBox.prop("checked")) {
      if (isEmptyOrSpaces(listMsg.val())) {
        Swal.fire({
          icon: "error",
          title: "Empty Field",
          text: "Please Fill Required Field",
        });
      } else if (listMsg.val().length >= 300) {
        Swal.fire({
          icon: "error",
          title: "Message Exceeded",
          text: "Make sure Message is not over 300 characters!",
        });
      } else {
        Swal.fire({
          title: "Editing Message",
          icon: "warning",
          text: `Do you want changes to '# ${count + 1}' Message?`,
          confirmButtonText: `Save`,
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            try {
              settings.messages[count] = listMsg.val().trim();
              var editMsg = JSON.stringify(settings, null, 2);
              fs.writeFileSync(
                path.join(__dirname, "./timed-messages.json"),
                editMsg
              );
              Swal.fire({
                icon: "success",
                title: "New Edit Message Saved",
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
      }
    } else {
      Swal.fire({
        icon: "info",
        title: "Unable to Edit",
        text: "Enable Checkbox to Edit Message!",
      });
    }
  });

  btnFunctions[3].click(() => {
    try {
      settings.timer = parseInt(slider.val());
      var updateTimer = JSON.stringify(settings, null, 2);
      fs.writeFileSync(
        path.join(__dirname, "./timed-messages.json"),
        updateTimer
      );
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

  checkBox.change((select) => {
    var editChecked = $(select.currentTarget).prop("checked");
    switch (editChecked) {
      case true:
        listMsg.prop("disabled", false);
        break;

      case false:
        listMsg.prop("disabled", true);
        break;
    }
  });

  toggleSwitch.change((select) => {
    var toggleChange = $(select.currentTarget).prop("checked");
    switch (toggleChange) {
      case true:
        try {
          settings.active = true;
          var trueValue = JSON.stringify(settings, null, 2);
          fs.writeFileSync(
            path.join(__dirname, "./timed-messages.json"),
            trueValue
          );
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
          fs.writeFileSync(
            path.join(__dirname, "./timed-messages.json"),
            falseValue
          );
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
