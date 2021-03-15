const fs = require("fs");
const path = require("path");
const $ = require("jquery");
const gridjs = require("gridjs");
const dataValues = require("../../testUsers.json");

$(document).ready(function () {
  var userArray = [];
  $.each(dataValues, (key, value) => {
    userArray.push([
      value.level,
      key,
      `( ${value.xp}/${value.level * 50} )`,
      value.points,
    ]);
  });

  gridShow = new gridjs.Grid({
    columns: ["Level", "Name", "XP", "Points"],
    search: true,
    sort: true,
    fixedHeader: true,
    height: "280px",
    data: userArray,
    style: {
      td: {
        "text-align": "center",
      },
    },
  }).render(document.getElementById("table"));
});
