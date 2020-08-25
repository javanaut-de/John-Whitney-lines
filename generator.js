//jshint esversion:6
class Generator {

  constructor() {

    this.amplitude = 1.0;
    this.frequency = 1.0;
    this.phase = 0.0;

    this.freqencySlider;
    this.amplitudeSlider;
    this.phaseSlider;

    this.freqencyBox;
    this.amplitudeBox;
    this.phaseBox;
  }

  x(time) {
    return sin(this.frequency * time + this.phase) * this.amplitude;
  }

  y(time) {
    return cos(this.frequency * time + this.phase) * this.amplitude;
  }

  createUiElement(parentDiv) {

    let subDiv = createElement('div').parent(parentDiv).class('slider-column');

    createP('Generator').parent(subDiv);

    createDiv('Freq').parent(subDiv);
    this.freqencySlider = createSlider(0, 100, 10).parent(subDiv).size(100);
    this.freqencyBox = createInput(this.freqencySlider.value()).parent(subDiv).size(32);
    createElement('br').parent(subDiv);

    createDiv('Ampl').parent(subDiv);
    this.amplitudeSlider = createSlider(0, 100, 10).parent(subDiv).size(100);
    this.amplitudeBox = createInput(this.amplitudeSlider.value()).parent(subDiv).size(32);
    createElement('br').parent(subDiv);

    createDiv('Phase').parent(subDiv);
    this.phaseSlider = createSlider(-180, 180).parent(subDiv).size(100);
    this.phaseBox = createInput(this.phaseSlider.value()).parent(subDiv).size(32);
    createElement('br').parent(subDiv);

    this.createListeners();
  }

  createListeners() {

    this.freqencyBox.input(e => { this.freqencySlider.value(this.freqencyBox.value()); this.frequency = this.freqencyBox.value() / 100.0; });
    this.freqencySlider.input(e => { this.freqencyBox.value(this.freqencySlider.value()); this.frequency = this.freqencySlider.value() / 100.0; });

    this.amplitudeBox.input(e => { this.amplitudeSlider.value(this.amplitudeBox.value()); this.amplitude = this.amplitudeBox.value(); });
    this.amplitudeSlider.input(e => { this.amplitudeBox.value(this.amplitudeSlider.value()); this.amplitude = this.amplitudeSlider.value(); });

    this.phaseBox.input(e => { this.phaseSlider.value(this.phaseBox.value()); this.phase = PI * this.phaseSlider.value() / 180.0; });
    this.phaseSlider.input(e => { this.phaseBox.value(this.phaseSlider.value()); this.phase = PI * this.phaseBox.value() / 180.0; });
  }
}
