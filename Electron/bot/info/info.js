const $ = require("jquery");
const fs = require("fs");
const path = require("path");

const dirToPlugin = path.join(__dirname, "../features/plugins/");
const dirToGame = path.join(__dirname, "../games/plugins");
const dirToLevel = path.join(__dirname, "../level-system/plugins");
const dirAlerts = require(path.join(__dirname, "../../data/alerts.json"));
const dirToOthers = path.join(__dirname, "../other");

const readPluginsFld = fs.readdirSync(path.join(dirToPlugin));
const readGamesFld = fs.readdirSync(path.join(dirToGame));
const readlevelFld = fs.readdirSync(path.join(dirToLevel));
const readOtherFld = fs.readdirSync(path.join(dirToOthers));

$(document).ready(() => {
  $.each(readPluginsFld, (key, name) => {
    const dir = require(path.join(dirToPlugin, name, `/${name}.js`));
    const dirJSON = require(path.join(dirToPlugin, name, `/${name}.json`));

    switch (dirJSON.active) {
      case true:
        $("#iDFeatures").append(
          `<li class="list-group-item d-flex justify-content-between align-items-center">${dir.name}<span class="badge badge-success">Active</span></li>`
        );
        break;

      case false:
        $("#iDFeatures").append(
          `<li class="list-group-item d-flex justify-content-between align-items-center">${dir.name}<span class="badge badge-danger">Inactive</span></li>`
        );
        break;
    }
  });

  $.each(readGamesFld, (key, name) => {
    const dir = require(path.join(dirToGame, name, `/${name}.js`));
    const dirJSON = require(path.join(dirToGame, name, `/${name}.json`));

    switch (dirJSON.active) {
      case true:
        $("#iDGames").append(
          `<li class="list-group-item d-flex justify-content-between align-items-center">${dir.name}<span class="badge badge-success">Active</span></li>`
        );
        break;

      case false:
        $("#iDGames").append(
          `<li class="list-group-item d-flex justify-content-between align-items-center">${dir.name}<span class="badge badge-danger">Inactive</span></li>`
        );
        break;
    }
  });

  const fileUserdata = require("../level-system/user-data.js");
  const dirJSONfile = require("../level-system/user-data.json");

  switch (dirJSONfile.active) {
    case true:
      $("#iDLevel").append(
        `<li class="list-group-item d-flex justify-content-between align-items-center">${fileUserdata.name}<span class="badge badge-success">Active</span></li>`
      );
      break;

    case false:
      $("#iDLevel").append(
        `<li class="list-group-item d-flex justify-content-between align-items-center">${fileUserdata.name}<span class="badge badge-danger">Inactive</span></li>`
      );
      break;
  }

  $.each(readlevelFld, (key, name) => {
    const dir = require(path.join(dirToLevel, name, `/${name}.js`));
    const dirJSON = require(path.join(dirToLevel, name, `/${name}.json`));
    switch (dirJSON.active) {
      case true:
        $("#iDLevel").append(
          `<li class="list-group-item d-flex justify-content-between align-items-center">${dir.name}<span class="badge badge-success">Active</span></li>`
        );
        break;

      case false:
        $("#iDLevel").append(
          `<li class="list-group-item d-flex justify-content-between align-items-center">${dir.name}<span class="badge badge-danger">Inactive</span></li>`
        );
        break;
    }
  });

  $.each(dirAlerts.alerts, (key, value) => {
    var alertsName = value.name;
    var alertsActive = value.active;
    switch (alertsActive) {
      case true:
        $("#iDAlerts").append(
          `<li class="list-group-item d-flex justify-content-between align-items-center">${alertsName}<span class="badge badge-success">Active</span></li>`
        );
        break;

      case false:
        $("#iDAlerts").append(
          `<li class="list-group-item d-flex justify-content-between align-items-center">${alertsName}<span class="badge badge-danger">Inactive</span></li>`
        );
        break;
    }
  });

  $.each(readOtherFld, (key, name) => {
    const dir = require(path.join(dirToOthers, name, `/${name}.js`));
    const dirJSON = require(path.join(dirToOthers, name, `/${name}.json`));
    switch (dirJSON.active) {
      case true:
        $("#iDothers").append(
          `<li class="list-group-item d-flex justify-content-between align-items-center">${dir.name}<span class="badge badge-success">Active</span></li>`
        );
        break;

      case false:
        $("#iDothers").append(
          `<li class="list-group-item d-flex justify-content-between align-items-center">${dir.name}<span class="badge badge-danger">Inactive</span></li>`
        );
        break;
    }
  });
});
