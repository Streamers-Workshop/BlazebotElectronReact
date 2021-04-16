const $ = require("jquery");
const fs = require("fs");
const path = require("path");
const chance = require("chance").Chance();
const settings = require("./giveaway.json");
const Swal = require("sweetalert2");
const confetti = require("canvas-confetti");

$(document).ready(() => {
  const toggleSwitch = $("#toggleActivate");
  toggleSwitch.prop("checked", settings.active);
  var list = [];
  function reloadData() {
    $.ajax({
      url: "./giveaway.json",
      dataType: "json",
      success: function (result) {
        list.splice(0, list.length);
        $.each(result.joinedUser, (key, value) => {
          list.push(value);
        });
        $("#listValue").html(`<b>${list.length}</b> Members Joined Giveaway`);
        setTimeout(reloadData, 1000);
      },
    });
  }

  reloadData();

  $("#btnWinner").click((button) => {
    if (list.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Giveaway Members Empty",
        text: "Users Have to Join the Giveaway",
      });
    } else {
      var winner = chance.pickone(list);

      var duration = 5 * 1000;
      var animationEnd = Date.now() + duration;
      var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        var particleCount = 85 * (timeLeft / duration);

        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          })
        );

        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          })
        );
      }, 250);

      $("#addWinner").html(
        `<label for="selectWinner" class="animate__animated animate__bounceInDown animate__delay-1s"style="font-size: 35px; font-family: Staatliches, sans-serif;"><u>Winner</u></label>` +
          `<h4 style="text-align: center" class="animate__animated animate__bounceInDown animate__delay-2s"><i>${winner}</i></h3>`
      );

      try {
        var getWinner = list.indexOf(winner);
        settings.joinedUser.splice(getWinner, 1);
        var deleteWinner = JSON.stringify(settings, null, 2);
        fs.writeFileSync(path.join(__dirname, "./giveaway.json"), deleteWinner);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please Try Again Later!",
        });
      }

      $(button.currentTarget).attr("disabled", true);
      $(button.currentTarget).html(
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Display Winner'
      );
    }

    setTimeout(() => {
      $(button.currentTarget).attr("disabled", false);
      $(button.currentTarget).html("Display Winner");
    }, 6000);
  });

  $("#btnReset").click(() => {
    Swal.fire({
      icon: "warning",
      title: "Reset Giveaway",
      confirmButtonText: `Reset`,
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
      text: "Do you want to Reset the Giveaway",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          settings.joinedUser.length = 0;
          var deleteList = JSON.stringify(settings, null, 2);
          fs.writeFileSync(path.join(__dirname, "./giveaway.json"), deleteList);
          Swal.fire({
            icon: "success",
            title: "Giveaway has been Reset",
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
          fs.writeFileSync(path.join(__dirname, "./giveaway.json"), trueValue);
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
          fs.writeFileSync(path.join(__dirname, "./giveaway.json"), falseValue);
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
