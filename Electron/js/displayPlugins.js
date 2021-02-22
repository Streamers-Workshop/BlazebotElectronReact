const fs = require("fs");
const path = require("path");
const $ = require("jquery");

const dirToPlugin = path.join(__dirname, "../plugins/");

const readPluginsFld = fs
  .readdirSync(path.join(dirToPlugin))
  .filter(function (x) {
    return x !== ".DS_Store";
  });

$(document).ready(function () {
  var count = 1;
  for (var i in readPluginsFld) {
    $("#pluginNames").append(
      '<tr><th scope="row">' +
        count +
        "</th>" +
        "<td>" +
        readPluginsFld[i] +
        "</td>" +
        '<td><label class="switch"><input type="checkbox" /><span class="slider"></span></label></td>' +
        '<td><button type="button" class="btn btn-outline-primary">Info</button></td>'
    );
    count++;
  }
});

/*
const showdown = require("showdown");
const converter = new showdown.Converter();
var text = testing.toString();
var html = converter.makeHtml(text);
document.getElementById("readmark").innerHTML = html;
*/
