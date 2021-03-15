const fs = require("fs");
const path = require("path");
const $ = require("jquery");
const Swal = require("sweetalert2");

const settings = require("./8ball.json");
var count = 0;

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

$(document).ready(() => {
  const listValue = $("#ballMsgs"),
    valueNum = $("#lblBallMsgs"),
    checkBox = $("#EditballMsg"),
    toggleSwitch = $("#toggleActivate"),
    buttonsTrigger = [$("#addMessage"), $("#editMessage"), $("#deleteMessage")];

  listValue.val(settings.messages[count]);
  toggleSwitch.prop("checked", settings.active);
  valueNum.html("List of 8ball Messages (Edit/Delete) - # " + (count + 1));

  checkBox.change((select) => {
    var editChecked = $(select.currentTarget).prop("checked");
    switch (editChecked) {
      case true:
        listValue.prop("disabled", false);
        break;

      case false:
        listValue.prop("disabled", true);
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
          fs.writeFileSync(path.join(__dirname, "./8ball.json"), trueValue);
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
          fs.writeFileSync(path.join(__dirname, "./8ball.json"), falseValue);
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

  $("#previousMsgID").click(() => {
    if (count === 0) {
      count = settings.messages.length;
    }
    count = count - 1;
    listValue.val(settings.messages[count]);
    valueNum.html("List of 8ball Messages (Edit/Delete) - # " + (count + 1));
  });

  $("#nextMsgID").click(() => {
    count++;
    count = count % settings.messages.length;
    listValue.val(settings.messages[count]);
    valueNum.html("List of 8ball Messages (Edit/Delete) - # " + (count + 1));
  });

  buttonsTrigger[0].click(() => {
    const txtNewValue = $("#ballNewMsg");

    if (isEmptyOrSpaces(txtNewValue.val())) {
      Swal.fire({
        icon: "error",
        title: "Empty Field",
        text: "Please Fill Required Field",
      });
    } else if (txtNewValue.val().length >= 150) {
      Swal.fire({
        icon: "error",
        title: "Message Exceeded",
        text: "Make sure Message is not over 150 characters!",
      });
    } else {
      try {
        settings.messages.push(txtNewValue.val().trim());
        var newMsg = JSON.stringify(settings, null, 2);
        fs.writeFileSync(path.join(__dirname, "./8ball.json"), newMsg);
        Swal.fire({
          icon: "success",
          title: "Message Saved",
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

  buttonsTrigger[1].click(() => {
    if (checkBox.prop("checked")) {
      if (isEmptyOrSpaces(listValue.val())) {
        Swal.fire({
          icon: "error",
          title: "Empty Field",
          text: "Please Fill Required Field",
        });
      } else if (listValue.val().length >= 150) {
        Swal.fire({
          icon: "error",
          title: "Message Exceeded",
          text: "Make sure Message is not over 150 characters!",
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
              settings.messages[count] = listValue.val().trim();
              var editMsg = JSON.stringify(settings, null, 2);
              fs.writeFileSync(path.join(__dirname, "./8ball.json"), editMsg);
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

  buttonsTrigger[2].click(() => {
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
          var deleteMsg = JSON.stringify(settings, null, 2);
          fs.writeFileSync(path.join(__dirname, "./8ball.json"), deleteMsg);
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
});
