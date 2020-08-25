"use strict";

//jshint esversion:6
var t = 0;
var guiDiv;
var sliders = [];
var boxes = [];
var speed = 0.5;
var bgCol = [225, 225, 225];
var aDraw = "Line";
var aTrails = 1;
var aStroke = 5;
var aDiminish = true;
var aSpacing = 1;
var aColor = [0, 0, 100];
var points = [];
var point1 = new Point();
var point2 = new Point(10, 100, 0, 10, 100, 0);
var currentPoint = point1;

function setup() {
  createCanvas(400, 400);
  guiDiv = select(".gui");
  drawSliders();
  sliderInit();
  sliderSynch(); // force inputs to be numbers only

  var inputs = selectAll('input');

  for (var i = 0; i < inputs.length; i++) {
    setInputFilter(inputs[i], function (value) {
      return /^-?\d*[.,]?\d*$/.test(value);
    });
  }
}

function draw() {
  background(bgCol);
  translate(width / 2, height / 2);
  stroke(aColor);

  for (var i = 0; i < aTrails; i++) {
    strokeWeight(map(i, aTrails, 0, 0, aStroke));
    if (!aDiminish) strokeWeight(aStroke);
    var t1 = t - i * aSpacing;
    point(point1.x(t1), point1.y(t1));
  }

  t += speed;
}

function drawSliders() {
  var subDiv = [];

  for (var i = 0; i < 4; i++) {
    //columns
    sliders[i] = [];
    boxes[i] = [];
    subDiv[i] = createElement('div').parent(guiDiv)["class"]('slider-column');
    createP('Sliders ' + (i + 1)).parent(subDiv[i]);

    for (var j = 0; j < 3; j++) {
      //rows
      switch (j) {
        case 0:
          //frequency
          sliders[i][j] = createSlider(0, 100, 10).parent(subDiv[i]).size(100);
          break;

        case 1:
          //amplitude
          sliders[i][j] = createSlider(0, 100, 100).parent(subDiv[i]).size(100);
          break;

        case 2:
          //offset tau
          sliders[i][j] = createSlider(0, 1, 0, 1 / 16).parent(subDiv[i]).size(100);
          break;

        default:
          print("error in drawing sliders, out of range switch");
          break;
      }

      boxes[i][j] = createInput(sliders[i][j].value()).parent(subDiv[i]).size(32);
      createElement('br').parent(subDiv[i]);
    }
  }
}

function sliderSynch() {
  var _loop = function _loop(i) {
    var _loop2 = function _loop2(j) {
      boxes[i][j].input(function (e) {
        sliders[i][j].value(boxes[i][j].value());
        updateCurrentPoint(i, j, boxes[i][j].value());
      });
      sliders[i][j].input(function (e) {
        boxes[i][j].value(sliders[i][j].value());
        updateCurrentPoint(i, j, sliders[i][j].value());
      });
    };

    for (var j = 0; j < sliders[i].length; j++) {
      _loop2(j);
    }
  };

  for (var i = 0; i < sliders.length; i++) {
    _loop(i);
  }
}

function sliderInit() {
  // function boxesSliders(i, j, name){
  //   boxes  [i][j].value(currentPoint.name);
  //   sliders[i][j].value(currentPoint.name);
  // }
  // boxesSliders(0,0,"x1f");
  boxes[0][0].value(currentPoint.x1f);
  sliders[0][0].value(currentPoint.x1f);
  boxes[0][1].value(currentPoint.x1a);
  sliders[0][1].value(currentPoint.x1a);
  boxes[0][2].value(currentPoint.x1o);
  sliders[0][2].value(currentPoint.x1o);
  boxes[1][0].value(currentPoint.x2f);
  sliders[1][0].value(currentPoint.x2f);
  boxes[1][1].value(currentPoint.x2a);
  sliders[1][1].value(currentPoint.x2a);
  boxes[1][2].value(currentPoint.x2o);
  sliders[1][2].value(currentPoint.x2o);
  boxes[2][0].value(currentPoint.y1f);
  sliders[2][0].value(currentPoint.y1f);
  boxes[2][1].value(currentPoint.y1a);
  sliders[2][1].value(currentPoint.y1a);
  boxes[2][2].value(currentPoint.y1o);
  sliders[2][2].value(currentPoint.y1o);
  boxes[3][0].value(currentPoint.y2f);
  sliders[3][0].value(currentPoint.y2f);
  boxes[3][1].value(currentPoint.y2a);
  sliders[3][1].value(currentPoint.y2a);
  boxes[3][2].value(currentPoint.y2o);
  sliders[3][2].value(currentPoint.y2o);
}

function updateCurrentPoint(col, row, val) {
  switch (col) {
    case 0:
      switch (row) {
        case 0:
          currentPoint.x1f = val;
          break;

        case 1:
          currentPoint.x1a = val;
          break;

        case 2:
          currentPoint.x1o = val;
          break;

        default:
          print("error, switch updateCurrentPoint out of bounds. Row: " + row + " Col: " + col);
          break;
      }

      break;

    case 1:
      switch (row) {
        case 0:
          currentPoint.x2f = val;
          break;

        case 1:
          currentPoint.x2a = val;
          break;

        case 2:
          currentPoint.x2o = val;
          break;

        default:
          print("error, switch updateCurrentPoint out of bounds. Row: " + row + " Col: " + col);
          break;
      }

      break;

    case 2:
      switch (row) {
        case 0:
          currentPoint.y1f = val;
          break;

        case 1:
          currentPoint.y1a = val;
          break;

        case 2:
          currentPoint.y1o = val;
          break;

        default:
          print("error, switch updateCurrentPoint out of bounds. Row: " + row + " Col: " + col);
          break;
      }

      break;

    case 3:
      switch (row) {
        case 0:
          currentPoint.y2f = val;
          break;

        case 1:
          currentPoint.y2a = val;
          break;

        case 2:
          currentPoint.y2o = val;
          break;

        default:
          print("error, switch updateCurrentPoint out of bounds. Row: " + row + " Col: " + col);
          break;
      }

      break;

    default:
      print("error, switch updateCurrentPoint out of bounds. Row: " + row + " Col: " + col);
      break;
  }
} // https://jsfiddle.net/emkey08/zgvtjc51.1


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