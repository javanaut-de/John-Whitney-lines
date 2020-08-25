"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//jshint esversion:6
var Point =
/*#__PURE__*/
function () {
  function Point() {
    var x1f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var x1a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var x1o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var y1f = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
    var y1a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
    var y1o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.25;
    var x2f = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 10;
    var x2a = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var x2o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    var y2f = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 10;
    var y2a = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
    var y2o = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;

    _classCallCheck(this, Point);

    this.x1f = x1f;
    this.x1a = x1a;
    this.x1o = x1o;
    this.y1f = y1f;
    this.y1a = y1a;
    this.y1o = y1o;
    this.x2f = x2f;
    this.x2a = x2a;
    this.x2o = x2o;
    this.y2f = y2f;
    this.y2a = y2a;
    this.y2o = y2o;
  }

  _createClass(Point, [{
    key: "x",
    value: function x(t) {
      return wave(this.x1f, this.x1a, this.x1o, t) + wave(this.x2f, this.x2a, this.x2o, t);
    }
  }, {
    key: "y",
    value: function y(t) {
      return wave(this.y1f, this.y1a, this.y1o, t) + wave(this.y2f, this.y2a, this.y2o, t);
    }
  }]);

  return Point;
}();

function wave(freq, amp, offsetT, time) {
  return sin(time / freq + offsetT * TAU) * amp;
}