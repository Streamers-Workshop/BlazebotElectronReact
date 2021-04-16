import Swal from "sweetalert2";

function test() {
  Swal.fire({
    title: "Signing Out",
    text: "Are You Sure You Want to Sign Out?",
    showCancelButton: true,
    confirmButtonColor: "#26973E",
    confirmButtonText: "Sign Out",
  }).then((result) => {
    if (result.isConfirmed) {
    }
  });
}

export { test };
