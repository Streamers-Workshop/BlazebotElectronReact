const fs = require("fs");
const path = require("path");
const $ = require("jquery");

const test = require("../test.json");
const discordLive = test.discord;
const arrayDiscord = [];

$(document).ready(() => {
  const discordMsg = $("#txtLiveMessage");

  $.each(discordLive, (key, value) => {
    arrayDiscord.push(value);
  });

  discordMsg.val(arrayDiscord[0]);

  $("#EditMsgDiscordChecked").change((select) => {
    var inputCheck = $(select.currentTarget).prop("checked");
    switch (inputCheck) {
      case true:
        discordMsg.prop("disabled", false);
        break;
      case false:
        discordMsg.prop("disabled", true);
        break;
    }
  });
});
