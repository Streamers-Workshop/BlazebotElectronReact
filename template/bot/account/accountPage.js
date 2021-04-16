const $ = require("jquery");
const Swal = require("sweetalert2");

$(document).ready(() => {
  $("#logout").click(() => {
    Swal.fire({
      title: "Signing Out",
      text: "Are You Sure You Want to Sign Out?",
      showCancelButton: true,
      confirmButtonColor: "#26973E",
      confirmButtonText: "Sign Out",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "../main/intro.html";
      }
    });
  });
});
