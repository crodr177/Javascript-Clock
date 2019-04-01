var colorText = document.querySelector("#color");
var colorChange = document.querySelector("#color-change");

var interval = 5;
var red = 0;
var blue = 0;
var green = 0;

function pad(str) {
  if (str.length === 1) {
    return "0" + str;
  } else {
    return str;
  }
}

setInterval(function(){
  blue += interval;

  if (blue >= 255) {
    blue = 0;
    green += interval;
  }

  if (green >= 255) {
    green = 0;
    red += interval;
  }

  if (red >= 255) {
    red = 0;
    blue = 0;
    green = 0;
  }

  let redstr = pad(red.toString(16));
  let greenstr = pad(green.toString(16));
  let bluestr = pad(blue.toString(16));


  var hexaColor = redstr + greenstr + bluestr;

  colorText.innerHTML = `#${hexaColor}`;
  colorChange.style.backgroundColor = `#${hexaColor}`;
}, 1000);