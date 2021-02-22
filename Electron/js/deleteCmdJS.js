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
    document.getElementById("txtAreaMessage").value = txtAreaValue;
  });
});

function deleteProceed() {
  const selectedCmd = $("#selectForm").val();

  if (selectedCmd == 0) {
    Swal.fire({
      icon: "error",
      title: "Invalid Selected Commmand",
      text: "Please Select Command to Delete",
    });
  } else {
    Swal.fire({
      title: "Deleting Command",
      icon: "warning",
      text: `Do you want to delete '${selectedCmd}' Command?`,
      confirmButtonText: `Delete`,
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Command Deleted",
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
