const $ = require("jquery");
const Swal = require("sweetalert2");
const path = require("path");
const fs = require("fs");
const cmd = require("../../data/commands.json");

const cmdsList = cmd.commands;
const arrayCmds = [];
var setValue = 0;

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

$(document).ready(() => {
  $.each(cmdsList, (key, value) => {
    arrayCmds.push([key, value]);
  });

  // Display and navigate through All Command List

  var previousCmd = $("#previousClickID");
  var nextCmd = $("#nextClickID");

  var setCmd = $("#commandInputID");
  var setMsg = $("#txtAreaCommandResult");

  setCmd.val(arrayCmds[setValue][0]);
  setMsg.val(arrayCmds[setValue][1]);

  previousCmd.click(() => {
    if (setValue === 0) {
      setValue = arrayCmds.length;
    }
    setValue = setValue - 1;
    setCmd.val(arrayCmds[setValue][0]);
    setMsg.val(arrayCmds[setValue][1]);
  });

  nextCmd.click(() => {
    setValue++;
    setValue = setValue % arrayCmds.length;
    setCmd.val(arrayCmds[setValue][0]);
    setMsg.val(arrayCmds[setValue][1]);
  });

  /////////////////////////////////////////

  // Add Command to Data

  const inputCmd = $("#inputCommand"),
    inputCmdOutcome = $("#txtareaCommandOutcome");

  inputCmd.keypress((e) => {
    if (e.which == 32) {
      return false;
    }
  });

  $("#btnAddCmd").click(() => {
    if (
      isEmptyOrSpaces(inputCmd.val()) ||
      isEmptyOrSpaces(inputCmdOutcome.val())
    ) {
      Swal.fire({
        icon: "error",
        title: "Empty Field",
        text: "Please Fill all required Fields",
      });
    } else if (inputCmd.val().length >= 30) {
      Swal.fire({
        icon: "error",
        title: "Command Exceeded",
        text: "Make sure Command is not over 20 characters!",
      });
    } else if (inputCmdOutcome.val().length >= 300) {
      Swal.fire({
        icon: "error",
        title: "Command Message Exceeded",
        text: "Make sure Command Message is not over 300 characters!",
      });
    } else {
      var sameCmd;
      $.each(cmdsList, (key) => {
        if (inputCmd.val() == key) {
          sameCmd = key;
        }
      });
      if (inputCmd.val() === sameCmd) {
        Swal.fire({
          icon: "error",
          title: "Command Already Exist",
          text: "Please Enter a Different Command!",
        });
      } else {
        try {
          cmdsList[inputCmd.val()] = inputCmdOutcome.val().trim();
          var newMessage = JSON.stringify(cmd, null, 2);
          fs.writeFileSync(
            path.join(__dirname, "../../data/commands.json"),
            newMessage
          );
          Swal.fire({
            icon: "success",
            title: "Command Saved",
            text: `Command - "${inputCmd.val()}" is Saved`,
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
    }
  });

  /////////////////////////////////////////

  // Delete Command to Data

  var selectDeleteCmd = $("#selectDeleteForm");
  $.each(cmdsList, (key) => {
    selectDeleteCmd.append("<option value=" + key + ">" + key + "</option>");
  });

  selectDeleteCmd.on("change", (select) => {
    const txtAreaValue = cmdsList[select.currentTarget.value];
    $("#txtAreaMessage").val(txtAreaValue);
  });

  $("#btnDeleteCmd").click(() => {
    if (selectDeleteCmd.val() == null) {
      Swal.fire({
        icon: "error",
        title: "Invalid Selected Commmand",
        text: "Please Select Command to Delete",
      });
    } else {
      Swal.fire({
        title: "Deleting Command",
        icon: "warning",
        text: `Do you want to delete '${selectDeleteCmd.val()}' Command?`,
        confirmButtonText: `Delete`,
        confirmButtonColor: "#dc3545",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            delete cmdsList[selectDeleteCmd.val()];
            var deleteMessage = JSON.stringify(cmd, null, 2);
            fs.writeFileSync(
              path.join(__dirname, "../../data/commands.json"),
              deleteMessage
            );
            Swal.fire({
              icon: "success",
              title: "Command Deleted",
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
  });

  /////////////////////////////////////////

  // Edit Command to Data

  const selectEditCmd = $("#selectEditForm"),
    inputEditCmd = $("#txtareaEdit");
  $.each(cmdsList, (key) => {
    selectEditCmd.append("<option value=" + key + ">" + key + "</option>");
  });

  selectEditCmd.on("change", (select) => {
    const txtAreaValue = cmdsList[select.currentTarget.value];
    inputEditCmd.val(txtAreaValue);
  });

  $("#btnEditCmd").click(() => {
    if (selectEditCmd.val() === null) {
      Swal.fire({
        icon: "error",
        title: "Invalid Selected Commmand",
        text: "Please Select Command to Edit",
      });
    } else if (inputEditCmd.val().length <= 0) {
      Swal.fire({
        icon: "error",
        title: "Edit Field Empty",
        text: "Please Add Message to Command",
      });
    } else if (inputEditCmd.val().length >= 300) {
      Swal.fire({
        icon: "error",
        title: "Command Message Exceeded",
        text: "Make sure Command Message is not over 300 characters!",
      });
    } else {
      Swal.fire({
        title: "Editing Command",
        icon: "warning",
        text: `Do you want changes to '${selectEditCmd.val()}' Command?`,
        confirmButtonText: `Save`,
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            cmdsList[selectEditCmd.val()] = inputEditCmd.val().trim();
            var editedMessage = JSON.stringify(cmd, null, 2);
            fs.writeFileSync(
              path.join(__dirname, "../../data/commands.json"),
              editedMessage
            );
            Swal.fire({
              icon: "success",
              title: "New Edit Message Command Saved",
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
  });

  /////////////////////////////////////////
});
