const $ = require("jquery");
const fs = require("fs");
const path = require("path");
const Swal = require("sweetalert2");
const settings = require("./giveaway.json");

var count = 0;

$(document).ready(() => {
  const txtValue = $("#txtSelectedUser"),
    selectUserDropDown = $("#selectUser");

  $.each(settings.joinedUser, (key, value) => {
    var option = new Option(value, count);
    $(option).html(value);
    selectUserDropDown.append(option);
    count++;
  });

  selectUserDropDown.change(() => {
    txtValue.val($("#selectUser option:selected").text());
  });

  $("#btnDeleteUser").click(() => {
    if (!txtValue.val() || selectUserDropDown.val() == null) {
      Swal.fire({
        icon: "error",
        title: "Invalid Selection",
        text: "Please Select User to Remove!",
      });
    } else {
      Swal.fire({
        title: "Deleting User",
        icon: "warning",
        text: `Do you want to delete '${txtValue.val()}'?`,
        confirmButtonText: `Delete`,
        confirmButtonColor: "#dc3545",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            settings.joinedUser.splice(selectUserDropDown.val(), 1);
            var deleteUser = JSON.stringify(settings, null, 2);
            fs.writeFileSync(
              path.join(__dirname, "./giveaway.json"),
              deleteUser
            );
            Swal.fire({
              icon: "success",
              title: `'${txtValue.val()}' Deleted`,
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
});
