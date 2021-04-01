const $ = require("jquery");
const path = require("path");
const sound = require("sound-play");

$(document).ready(() => {
  $("#clickMe").click(() => {
    var filePath = path.join(__dirname, `../audio/wow.mp3`);
    var selectTrigger = $("#test").val();

    switch (selectTrigger) {
      case "follow":
        var names = ["Billy", "James", "John", "Bobby", "Nathan"];
        $("#mainText").html(names[Math.floor(Math.random() * names.length)]);
        $("#subText").html("Thank You For the Follow");

        $("#line").css("animation", "");
        $("#mainText").css("animation", "");
        $("#subText").css("animation", "");

        setTimeout(() => {
          sound.play(filePath);
        }, 2400);

        setTimeout(() => {
          $("#line").css(
            "animation",
            "lineIn 0.2s 0.6s forwards, lineGrow 0.4s 1s forwards,linehide 0.5s 6.7s forwards"
          );
          $("#mainText").css(
            "animation",
            "textIn 0.4s 1.4s forwards,textTravel 4.6s 1.8s linear forwards"
          );
          $("#subText").css(
            "animation",
            "tagIn 0.4s 1.4s forwards, tagTravel 4.6s 1.8s linear forwards"
          );
        }, 1000);

        break;

      case "sub":
        var names = ["Billy", "James", "John", "Bobby", "Nathan"];
        $("#mainText").html(names[Math.floor(Math.random() * names.length)]);
        $("#subText").html("Thank You For the Sub");

        $("#line").css("animation", "");
        $("#mainText").css("animation", "");
        $("#subText").css("animation", "");

        setTimeout(() => {
          sound.play(filePath);
        }, 2400);

        setTimeout(() => {
          $("#line").css(
            "animation",
            "lineIn 0.2s 0.6s forwards, lineGrow 0.4s 1s forwards,linehide 0.5s 6.7s forwards"
          );
          $("#mainText").css(
            "animation",
            "textIn 0.4s 1.4s forwards,textTravel 4.6s 1.8s linear forwards"
          );
          $("#subText").css(
            "animation",
            "tagIn 0.4s 1.4s forwards, tagTravel 4.6s 1.8s linear forwards"
          );
        }, 1000);
        break;

      case "joined":
        var names = ["Billy", "James", "John", "Bobby", "Nathan"];
        $("#mainText").html(names[Math.floor(Math.random() * names.length)]);
        $("#subText").html("Welcome to the Stream");

        $("#line").css("animation", "");
        $("#mainText").css("animation", "");
        $("#subText").css("animation", "");

        setTimeout(() => {
          sound.play(filePath);
        }, 2400);

        setTimeout(() => {
          $("#line").css(
            "animation",
            "lineIn 0.2s 0.6s forwards, lineGrow 0.4s 1s forwards,linehide 0.5s 6.7s forwards"
          );
          $("#mainText").css(
            "animation",
            "textIn 0.4s 1.4s forwards,textTravel 4.6s 1.8s linear forwards"
          );
          $("#subText").css(
            "animation",
            "tagIn 0.4s 1.4s forwards, tagTravel 4.6s 1.8s linear forwards"
          );
        }, 1000);
        break;

      case "spell":
        var names = ["Billy", "James", "John", "Bobby", "Nathan"];
        $("#mainText").html(names[Math.floor(Math.random() * names.length)]);
        $("#subText").html("Thank You For the Spell");

        $("#line").css("animation", "");
        $("#mainText").css("animation", "");
        $("#subText").css("animation", "");

        setTimeout(() => {
          sound.play(filePath);
        }, 2400);

        setTimeout(() => {
          $("#line").css(
            "animation",
            "lineIn 0.2s 0.6s forwards, lineGrow 0.4s 1s forwards,linehide 0.5s 6.7s forwards"
          );
          $("#mainText").css(
            "animation",
            "textIn 0.4s 1.4s forwards,textTravel 4.6s 1.8s linear forwards"
          );
          $("#subText").css(
            "animation",
            "tagIn 0.4s 1.4s forwards, tagTravel 4.6s 1.8s linear forwards"
          );
        }, 1000);
        break;

      case "raid":
        var names = ["Billy", "James", "John", "Bobby", "Nathan"];
        $("#mainText").html(names[Math.floor(Math.random() * names.length)]);
        $("#subText").html("Thank You For the Raid");

        $("#line").css("animation", "");
        $("#mainText").css("animation", "");
        $("#subText").css("animation", "");

        setTimeout(() => {
          sound.play(filePath);
        }, 2400);

        setTimeout(() => {
          $("#line").css(
            "animation",
            "lineIn 0.2s 0.6s forwards, lineGrow 0.4s 1s forwards,linehide 0.5s 6.7s forwards"
          );
          $("#mainText").css(
            "animation",
            "textIn 0.4s 1.4s forwards,textTravel 4.6s 1.8s linear forwards"
          );
          $("#subText").css(
            "animation",
            "tagIn 0.4s 1.4s forwards, tagTravel 4.6s 1.8s linear forwards"
          );
        }, 1000);
        break;
    }
  });
});
