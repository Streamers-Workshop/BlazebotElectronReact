const $ = require("jquery");
const fs = require("fs");
const path = require("path");
const settings = require("./poll.json");
const Swal = require("sweetalert2");

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

$(document).ready(() => {
  const buttonTrigger = [$("#btnAddPoll"), $("#btnDeletePoll")],
    txtPoll = $("#txtAddPoll"),
    selectOption = $("#selectPoll"),
    toggleSwitch = $("#toggleActivate");

  toggleSwitch.prop("checked", settings.active);

  $.each(settings.namesOfPolls, (key, value) => {
    selectOption.append("<option value=" + key + ">" + value + "</option>");
  });

  buttonTrigger[0].click(() => {
    if (isEmptyOrSpaces(txtPoll.val())) {
      Swal.fire({
        icon: "error",
        title: "Empty Field",
        text: "Please Fill Required Field",
      });
    } else if (settings.namesOfPolls.length == 8) {
      Swal.fire({
        icon: "error",
        title: "Poll Exceeded",
        text: "Only 8 Polls Are Allowed",
      });
    } else {
      try {
        settings.namesOfPolls.push(txtPoll.val().trim());
        settings.dataValue.push(0);
        var addPollToList = JSON.stringify(settings, null, 2);
        fs.writeFileSync(path.join(__dirname, "./poll.json"), addPollToList);
        Swal.fire({
          icon: "success",
          title: "New Poll Added",
          text: `'${txtPoll.val()}' Added To Poll`,
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

  buttonTrigger[1].click(() => {
    Swal.fire({
      title: "Deleting Poll",
      icon: "warning",
      text: `Do you want to delete '${$(
        "#selectPoll option:selected"
      ).text()}' Message?`,
      confirmButtonText: `Delete`,
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          settings.namesOfPolls.splice(selectOption.val(), 1);
          settings.dataValue.splice(selectOption.val(), 1);
          var deletePoll = JSON.stringify(settings, null, 2);
          fs.writeFileSync(path.join(__dirname, "./poll.json"), deletePoll);
          Swal.fire({
            icon: "success",
            title: "Poll Deleted",
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

  toggleSwitch.change((select) => {
    var toggleChange = $(select.currentTarget).prop("checked");
    switch (toggleChange) {
      case true:
        try {
          settings.active = true;
          var trueValue = JSON.stringify(settings, null, 2);
          fs.writeFileSync(path.join(__dirname, "./poll.json"), trueValue);
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
          fs.writeFileSync(path.join(__dirname, "./poll.json"), falseValue);
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
