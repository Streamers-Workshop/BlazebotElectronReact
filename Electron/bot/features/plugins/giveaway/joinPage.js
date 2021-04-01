const $ = require("jquery");
const fs = require("fs");
const path = require("path");
const Swal = require("sweetalert2");
const settings = require("./giveaway.json");

var count = 0;

$(document).ready(() => {
  const selectUserDropDown = $("#selectUser");

  function reloadData() {
    $.ajax({
      url: "./giveaway.json",
      dataType: "json",
      success: function (result) {
        if (result.joinedUser.length === 0) {
          selectUserDropDown.empty();
          $("#title").html("No Members");
        } else {
          $("#title").html("Giveaway Members");
          selectUserDropDown.empty();
          $.each(result.joinedUser, (key, value) => {
            selectUserDropDown.append(
              "<option value=" + value + ">" + value + "</option>"
            );
          });
        }
        setTimeout(reloadData, 1000);
      },
    });
  }

  reloadData();
});
