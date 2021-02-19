const Swal = require("sweetalert2");
const fs = require("fs");
const path = require("path");

const jsonData = fs.readFileSync(path.join(__dirname, "../test.json"));
const parseValue = JSON.parse(jsonData);

function cmdValidation() {
  const inputCmd = document.getElementById("inputCommand").value;
  const inputCmdOutcome = document.getElementById("txtareaCommandOutcome")
    .value;
  if (inputCmd == "" || inputCmdOutcome == "") {
    Swal.fire({
      icon: "error",
      title: "Empty Field",
      text: "Please Fill all required Fields",
    });
  } else if (inputCmd.length >= 20) {
    Swal.fire({
      icon: "error",
      title: "Command Exceeded",
      text: "Make sure Command is not over 20 characters!",
    });
  } else if (inputCmdOutcome.length >= 300) {
    Swal.fire({
      icon: "error",
      title: "Command Message Exceeded",
      text: "Make sure Command Message is not over 300 characters!",
    });
  } else {
    try {
      fs.writeFileSync(path.join(__dirname, "../test.json"), data);
    } catch (e) {
      alert(e);
    }
    Swal.fire({
      icon: "success",
      title: "Command Saved",
      text: `Command - "${inputCmd}" is Saved`,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  }
}
