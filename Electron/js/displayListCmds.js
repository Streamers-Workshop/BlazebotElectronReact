const fs = require("fs");
const path = require("path");
const $ = require("jquery");

const readJSON = fs.readFileSync(path.join(__dirname, "../test.json"));
const parseValue = JSON.parse(readJSON);
const cmdsList = parseValue.commands;
const arrayCmds = [];
const arrayMsg = [];

$(document).ready(function () {
  $.each(cmdsList, function (key, value) {
    arrayCmds.push(key);
    arrayMsg.push(value);
  });

  var previousCmd = $("#previousClickID");
  var nextCmd = $("#nextClickID");

  var setCmd = $("#commandInputID");
  var setMsg = $("#txtAreaCommandResult");
  var setValue = 0;

  setCmd.val(arrayCmds[setValue]);
  setMsg.val(arrayMsg[setValue]);

  previousCmd.click(function () {
    if (setValue === 0) {
      setValue = arrayCmds.length;
    }
    setValue = setValue - 1;
    setCmd.val(arrayCmds[setValue]);
    setMsg.val(arrayMsg[setValue]);
  });

  nextCmd.click(function () {
    setValue++;
    setValue = setValue % arrayCmds.length;
    setCmd.val(arrayCmds[setValue]);
    setMsg.val(arrayMsg[setValue]);
  });
});
