const $ = (jQuery = require("jquery"));

const WebFont = require("webfontloader");

$(document).ready(() => {
  const fontArray = [
    "Roboto, sans-serif",
    "New Tegomin",
    "Kiwi Maru",
    "Open Sans",
    "Dela Gothic One",
    "Noto Sans JP",
    "Lato",
    "Montserrat",
    "Train One",
  ];

  WebFont.load({
    google: {
      families: fontArray,
    },
  });

  $.each(fontArray, (key, value) => {
    $("#selectFont").append("<option>" + value + "</option>");
  });

  $("#colorBackground").spectrum({
    type: "component",
    showPalette: "false",
    showPaletteOnly: "true",
    togglePaletteOnly: "true",
    showInput: "true",
    showAlpha: "false",
    allowEmpty: "false",
    move: function (color) {
      $("#total-bar-sub").css("background-color", color);
    },
  });

  $("#colorFont").spectrum({
    type: "component",
    showPalette: "false",
    showPaletteOnly: "true",
    togglePaletteOnly: "true",
    showInput: "true",
    showAlpha: "false",
    allowEmpty: "false",
    move: function (color) {
      $(".goal-cont").css("color", color);
    },
  });

  $("#colorBorder").spectrum({
    type: "component",
    showPalette: "false",
    showPaletteOnly: "true",
    togglePaletteOnly: "true",
    showInput: "true",
    showAlpha: "false",
    allowEmpty: "false",
    move: function (color) {
      $("#goal-bar").css("border-color", color);
    },
  });

  $("#followTxt").on("input", (text) => {
    $("#title").html(text.currentTarget.value);
  });

  $("#selectFont").change("select", () => {
    $("#title").css("font-family", $("#selectFont option:selected").text());
    [$("#goal-current"), $("#goal-total")].map((font) => {
      font.css("font-family", $("#selectFont option:selected").text());
    });
  });
});
