const anime = require("animejs");
const $ = require("jquery");
var count = 0;

function displayViewEffectCount() {
  var textWrapper = document.querySelector(".ml1 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline()
    .add({
      targets: ".ml1 .letter",
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      duration: 175,
      delay: (el, i) => 70 * (i + 1),
    })
    .add({
      targets: ".ml1 .line",
      scaleX: [0, 1],
      opacity: [0.5, 1],
      duration: 700,
      offset: "-=875",
      delay: (el, i, l) => 80 * (l - i),
    });

  if (count == 20) return (count = 0);
  count++;
}

$(document).ready(function () {
  var refreshID = $("#refreshViewCount");
  refreshID.click(function () {
    $("#displayEffect").html(
      `<h1 class="ml1"><span class="text-wrapper"><span class="line line1"></span><span class="letters">Viewers : ${count}</span><span class="line line2"></span></span></h1>`
    );
    displayViewEffectCount();
  });
});
