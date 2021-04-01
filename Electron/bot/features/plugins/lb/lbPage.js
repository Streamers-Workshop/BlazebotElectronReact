const fs = require("fs");
const path = require("path");
const $ = require("jquery");
const settings = require("./lb.json");
const dataValues = require("../../../../testUsers.json");
const arrayValues = [];

function displayLB(setValue) {
  const labels = [$("#iDLBFirst"), $("#iDLBSecond"), $("#iDLBThird")];
  arrayValues.sort((a, b) => b[setValue] - a[setValue]);
  arrayValues.splice(3, arrayValues.length);
  $("#nameFirst").html("<b>" + arrayValues[0][0] + "</b>");
  $("#nameSecond").html("<b>" + arrayValues[1][0] + "</b>");
  $("#nameThird").html("<b>" + arrayValues[2][0] + "</b>");
  $("#iDValueFirst").html(arrayValues[0][setValue]);
  $("#iDValueSecond").html(arrayValues[1][setValue]);
  $("#iDValueThird").html(arrayValues[2][setValue]);
  if (setValue === 1) {
    labels.map((value) => {
      value.html("Level");
    });
  } else {
    labels.map((value) => {
      value.html("Points");
    });
  }
}

$(document).ready(function () {
  $.each(dataValues, (key, values) => {
    arrayValues.push([key, values.level, values.points]);
  });

  displayLB(2);

  var isSomethingTrue;

  $("#btnLB").click(() => {
    if (isSomethingTrue) {
      isSomethingTrue = false;
      displayLB(2);
    } else {
      isSomethingTrue = true;
      displayLB(1);
    }
  });

  const toggleSwitch = $("#toggleActivate");
  toggleSwitch.prop("checked", settings.active);

  toggleSwitch.change((select) => {
    var toggleChange = $(select.currentTarget).prop("checked");
    switch (toggleChange) {
      case true:
        try {
          settings.active = true;
          var trueValue = JSON.stringify(settings, null, 2);
          fs.writeFileSync(path.join(__dirname, "./lb.json"), trueValue);
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
          fs.writeFileSync(path.join(__dirname, "./lb.json"), falseValue);
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
