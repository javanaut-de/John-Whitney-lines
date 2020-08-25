//jshint esversion:6
class Point {

  constructor (
    x1f = 10, x1a = 100, x1o = 0, 
    y1f = 10, y1a = 100, y1o = 0.25,
    x2f = 10, x2a = 0,   x2o = 0, 
    y2f = 10, y2a = 0,   y2o = 0) {
  
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

 x(t) {
    return wave(this.x1f, this.x1a, this.x1o, t) + wave(this.x2f, this.x2a, this.x2o, t);
  }

 y(t) {
    return wave(this.y1f, this.y1a, this.y1o, t) + wave(this.y2f, this.y2a, this.y2o, t);
  }
}

function wave (freq, amp, offsetT, time) {
  return sin(time / freq + offsetT * TAU) * amp;
}