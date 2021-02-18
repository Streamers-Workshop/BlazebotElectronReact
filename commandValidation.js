const Swal = require("sweetalert2");

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
    Swal.fire({
      icon: "success",
      title: "Command Saved",
      text: `Command - "${inputCmd}" is Saved`,
    });
  }
}
