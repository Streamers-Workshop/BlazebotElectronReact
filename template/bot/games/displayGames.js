const fs = require("fs");
const path = require("path");
const $ = require("jquery");

const dirToPlugin = path.join(__dirname, "/plugins");

const readPluginsFld = fs.readdirSync(path.join(dirToPlugin)).filter((x) => {
  return x !== ".DS_Store";
});

$(document).ready(() => {
  $.each(readPluginsFld, (key, name) => {
    const dir = require(path.join(dirToPlugin, name, `/${name}.js`));
    const dirHTML = path.join(dirToPlugin, name, `/${name}.html`);
    const dirImg = path.join(dirToPlugin, name, `/${name}.png`);
    const valueNum = key;

    $("#gamesAll").append(
      '<div class="col mb-4">' +
        '<div class="card border-success mb-3">' +
        `<div class="card-header" style="text-align: center; font-size: 16px;"><b>${dir.name}</b></div>` +
        '<div class="card-body text-primary" style="text-align: center">' +
        `<div style="margin-bottom: 10px"><a href="${dirHTML}"><img src="${dirImg}"></a></div>` +
        `<button id="ID${valueNum}" type="button" class="btn btn-success">View</button>` +
        "</div>" +
        "</div>" +
        "</div>"
    );

    $(`#ID${valueNum}`).click(() => {
      $(location).attr("href", dirHTML);
    });
  });
});
