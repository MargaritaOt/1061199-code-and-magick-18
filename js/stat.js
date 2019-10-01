'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 150;
var CLOUD_Y = 120;
var GAP = 50;
var FONT_GAP = 40;
var TEXT_HEIGHT = 40;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X - FONT_GAP, FONT_GAP / 2, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, GAP * 2, FONT_GAP / 4, "#fff");

  ctx.fillStyle = "#000";
  ctx.font = "16px  PT Mono";
  ctx.textBaseline = "hanging";
  ctx.fillText("Ура вы победили!", CLOUD_Y, CLOUD_Y / 4);
  ctx.fillText("Список результатов:", CLOUD_Y, GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + ((GAP + FONT_GAP) * i), CLOUD_Y * 2);
    ctx.fillRect(CLOUD_X + ((GAP + FONT_GAP) * i), CLOUD_HEIGHT - FONT_GAP, BAR_WIDTH, (-(barHeight * times[i]) / maxTime));
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + ((GAP + FONT_GAP) * i), FONT_GAP * 2);

  };

    if (names = "Вы") {
       ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      ctx.fillStyle = "hsl(240, 100%, 25%, " + Math.random() + ")";
    }
};
