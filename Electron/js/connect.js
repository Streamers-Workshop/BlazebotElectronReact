const $ = require("jquery");
const Swal = require("sweetalert2");
const fs = require("fs");
const path = require("path");
const settings = require("../settings.json");

$(document).ready(() => {
  /*if ("bot is already connected") {
    [
      buttonTrigger[0],
      buttonTrigger[1],
      botname,
      username,
      emailphone,
      password,
    ].map((value) => value.attr("disabled", true));
  }*/

  const buttonTrigger = [
      $("#btnSaveInfo"),
      $("#btnLoadBot"),
      $("#btnDisconnect"),
    ],
    botname = $("#txtbotName"),
    username = $("#txtUsername"),
    emailphone = $("#txtEmailPhone"),
    password = $("#txtPass");

  botname.val(settings.trovo.botname);
  username.val(settings.trovo.username);
  emailphone.val(settings.trovo.emailphone);
  password.val(settings.trovo.password);

  buttonTrigger[0].click(() => {
    if (!botname.val()) {
      Swal.fire({
        icon: "error",
        title: "Bot Name Empty",
        text: "Please Fill Text Field!",
      });
    } else if (!username.val()) {
      Swal.fire({
        icon: "error",
        title: "Username Empty",
        text: "Please Fill Text Field!",
      });
    } else if (!emailphone.val()) {
      Swal.fire({
        icon: "error",
        title: "Email Empty",
        text: "Please Fill Text Field!",
      });
    } else if (!password.val()) {
      Swal.fire({
        icon: "error",
        title: "Password Empty",
        text: "Please Fill Text Field!",
      });
    } else {
      try {
        var trovoInfo = {
          botname: botname.val().trim(),
          username: username.val().trim(),
          emailphone: emailphone.val().trim(),
          password: password.val(),
        };
        settings.trovo = trovoInfo;
        var addInfo = JSON.stringify(settings, null, 2);
        fs.writeFileSync(path.join(__dirname, "../settings.json"), addInfo);
        Swal.fire({
          icon: "success",
          title: "Trovo Information Saved",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please Try Again Later",
        });
      }
    }
  });

  buttonTrigger[1].click((change) => {
    try {
      //testing on how the bot may be connected - (you can make changes if u want)
      $(change.currentTarget).html(
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...'
      );

      [
        buttonTrigger[0],
        buttonTrigger[1],
        botname,
        username,
        emailphone,
        password,
      ].map((value) => value.attr("disabled", true));

      setTimeout(() => {
        Swal.fire({
          icon: "success",
          title: `${settings.trovo.botname} Ready!`,
          text: "Bot is Connect & Ready to Mod",
        });
        $(change.currentTarget).html("Load BlazeBot");
        $(change.currentTarget).attr("disabled", true);
        $("#btnDisconnect").attr("disabled", false);
      }, 5000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Cannot Connect",
        text: "Please Check Information to Connect",
      });
    }
  });

  buttonTrigger[2].click(() => {
    Swal.fire({
      icon: "success",
      title: `${settings.trovo.botname} Disconnect`,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  });
});
