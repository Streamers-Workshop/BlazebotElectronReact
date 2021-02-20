const anime = require("animejs");
const fs = require("fs");
const path = require("path");
const $ = require("jquery");

const jsonFile = fs.readFileSync(path.join(__dirname, "../test.json"));
const parseJson = JSON.parse(jsonFile);
const effectsName = parseJson;
const arrayEffect = effectsName.effects;

$(document).ready(function () {
  var selectEffect = $("#selectEffectID");
  $.each(arrayEffect, function (key, value) {
    selectEffect.append("<option value=" + key + ">" + value + "</option>");
  });

  selectEffect.on("change", function () {
    switch (this.value) {
      case "1":
        $("#displayEffect").html(
          '<h1 class="ml1"><span class="text-wrapper"><span class="line line1"></span><span class="letters">Bioblaze</span><span class="line line2"></span></span></h1>'
        );
        effect1();
        break;

      case "2":
        $("#displayEffect").html('<h1 class="ml2">Bioblaze</h1>');
        effect2();
        break;

      case "3":
        $("#displayEffect").html('<h1 class="ml3">Bioblaze</h1>');
        effect3();
        break;

      case "4":
        $("#displayEffect").html(
          '<h1 class="ml9"><span class="text-wrapper"><span class="letters">Bioblaze</span></span></h1>'
        );
        effect4();
        break;
      case "5":
        $("#displayEffect").html(
          '<h1 class="ml10"><span class="text-wrapper"><span class="letters">Bioblaze</span></span></h1>'
        );
        effect5();
        break;

      case "6":
        $("#displayEffect").html(
          '<h1 class="ml11"><span class="text-wrapper"><span class="line line1"></span><span class="letters">Bioblaze</span></span></h1>'
        );
        effect6();
        break;

      case "7":
        $("#displayEffect").html('<h1 class="ml12">Bioblaze</h1>');
        effect7();
        break;

      case "8":
        $("#displayEffect").html('<h1 class="ml13">Bioblaze</h1>');
        effect8();
        break;

      case "9":
        $("#displayEffect").html(
          '<h1 class="ml14"><span class="text-wrapper"><span class="letters">Bioblaze</span><span class="line"></span></span></h1>'
        );
        effect9();
        break;

      case "10":
        $("#displayEffect").html('<h1 class="ml16">Bioblaze</h1>');
        effect10();
        break;
    }
  });
});

// Effect 1 //
function effect1() {
  var textWrapper = document.querySelector(".ml1 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml1 .letter",
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i + 1),
    })
    .add({
      targets: ".ml1 .line",
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 700,
      offset: "-=875",
      delay: (el, i, l) => 80 * (l - i),
    })
    .add({
      targets: ".ml1",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}
/////////////////////////////////////////

// Effect 2//
function effect2() {
  var textWrapper = document.querySelector(".ml2");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml2 .letter",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i,
    })
    .add({
      targets: ".ml2",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}
// Effect 3 //
function effect3() {
  var textWrapper = document.querySelector(".ml3");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml3 .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i + 1),
    })
    .add({
      targets: ".ml3",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}
/////////////////////////////////////////

// Effect 4 //

function effect4() {
  var textWrapper = document.querySelector(".ml9 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml9 .letter",
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i + 1),
    })
    .add({
      targets: ".ml9",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

/////////////////////////////////////////

// Effect 5 //

function effect5() {
  var textWrapper = document.querySelector(".ml10 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml10 .letter",
      rotateY: [-90, 0],
      duration: 1300,
      delay: (el, i) => 45 * i,
    })
    .add({
      targets: ".ml10",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

/////////////////////////////////////////

// Effect 6 //

function effect6() {
  var textWrapper = document.querySelector(".ml11 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml11 .line",
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 700,
    })
    .add({
      targets: ".ml11 .line",
      translateX: [
        0,
        document.querySelector(".ml11 .letters").getBoundingClientRect().width +
          10,
      ],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100,
    })
    .add({
      targets: ".ml11 .letter",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1),
    })
    .add({
      targets: ".ml11",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

/////////////////////////////////////////

// Effect 7 //

function effect7() {
  var textWrapper = document.querySelector(".ml12");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml12 .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i,
    })
    .add({
      targets: ".ml12 .letter",
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i,
    });
}

/////////////////////////////////////////

// Effect 8 //

function effect8() {
  var textWrapper = document.querySelector(".ml13");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml13 .letter",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 300 + 30 * i,
    })
    .add({
      targets: ".ml13 .letter",
      translateY: [0, -100],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1200,
      delay: (el, i) => 100 + 30 * i,
    });
}

/////////////////////////////////////////

// Effect 9 //

function effect9() {
  var textWrapper = document.querySelector(".ml14 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml14 .line",
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 900,
    })
    .add({
      targets: ".ml14 .letter",
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 800,
      offset: "-=600",
      delay: (el, i) => 150 + 25 * i,
    })
    .add({
      targets: ".ml14",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

/////////////////////////////////////////

// Effect 10 //

function effect10() {
  var textWrapper = document.querySelector(".ml16");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml16 .letter",
      translateY: [-100, 0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 30 * i,
    })
    .add({
      targets: ".ml16",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}
