const $ = require("jquery");
const Swal = require("sweetalert2");
const fs = require("fs");
const path = require("path");
const ClipboardJS = require("clipboard");
const electron = require("electron");

$(document).ready(() => {
  new ClipboardJS(".btnCopy");
  const buttonTrigger = [
    $("#btnPreview"),
    $("#btnJoinedTest"),
    $("#btnFollowTest"),
    $("#btnSpellTest"),
    $("#btnSubTest"),
    $("#btnRaidTest"),
  ];

  buttonTrigger[0].click(() => {
    electron.shell.openExternal("http://localhost:9999");
  });

  buttonTrigger[1].click(() => {
    alert("Joined");
  });

  buttonTrigger[2].click(() => {
    alert("Follow");
  });

  buttonTrigger[3].click(() => {
    alert("Spell");
  });

  buttonTrigger[4].click(() => {
    alert("Sub");
  });

  buttonTrigger[5].click(() => {
    alert("Raid");
  });
});
