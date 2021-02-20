const Swal = require("sweetalert2");
const fs = require("fs");
const path = require("path");
const $ = require("jquery");

const jsonData = fs.readFileSync(path.join(__dirname, "../test.json"));
const parseValue = JSON.parse(jsonData);
const commands = parseValue.commands;

$(document).ready(function () {
  var selectCmd = $("#selectForm");
  $.each(commands, function (key) {
    selectCmd.append("<option value=" + key + ">" + key + "</option>");
  });

  selectCmd.on("change", function () {
    const txtAreaValue = commands[this.value];
    document.getElementById("txtareaEdit").value = txtAreaValue;
  });
});

function editProceed() {
  const selectedCmd = document.getElementById("selectForm").value;
  const inputEditCmd = document.getElementById("txtareaEdit").value;
  if (selectedCmd === 0) {
    Swal.fire({
      icon: "error",
      title: "Invalid Selected Commmand",
      text: "Please Select Command to Edit",
    });
  } else if (inputEditCmd.length <= 0) {
    Swal.fire({
      icon: "error",
      title: "Edit Field Empty",
      text: "Please Select Command to Edit",
    });
  } else {
    Swal.fire({
      title: "Editing Command",
      icon: "warning",
      text: `Do you want changes to '${selectedCmd}' Command?`,
      confirmButtonText: `Save`,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "New Message Command Saved",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      }
    });
  }
}
