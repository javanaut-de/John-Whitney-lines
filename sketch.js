//jshint esversion:6

let NUMBER_OF_GENERATORS = 4;

let t = 0;
let guiDiv;

let generators = [];

let speed = 0.5;
let bgCol = [225, 225, 225];

let aDraw = "Line";
let aTrails = 1;
let aStroke = 5;
let aDiminish = true;
let aSpacing = 1;
let aColor = [0, 0, 100];

let x = 0;
let y = 0;

function setup() {

  createCanvas(400, 400);

  guiDiv = select(".gui");

  for (let gen = 0; gen < NUMBER_OF_GENERATORS; gen++) {
    generators.push(new Generator());
  }

  for (let gen = 0; gen < NUMBER_OF_GENERATORS; gen++) {
    generators[gen].createUiElement(guiDiv);
  }

  // force inputs to be numbers only
  let inputs = selectAll('input');

  for (let i = 0; i < inputs.length; i++) {

    setInputFilter(inputs[i], function (value) {
      return /^-?\d*[.,]?\d*$/.test(value);
    });

  }
}

function draw() {

  background(bgCol);
  translate(width / 2, height / 2);
  stroke(aColor);

  for (let i = 0; i < aTrails; i++) {
    strokeWeight(map(i, aTrails, 0, 0, aStroke));
    if (!aDiminish) strokeWeight(aStroke);
    let t1 = t - i * aSpacing;

    x = 0;
    y = 0;

    for (let gen = 0; gen < NUMBER_OF_GENERATORS; gen++) {
      x += generators[gen].x(t1);
      y += generators[gen].y(t1);
    }

    point(x, y);
  }

  t += speed;
}

// https://jsfiddle.net/emkey08/zgvtjc51.1
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
    textbox.elt.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}
