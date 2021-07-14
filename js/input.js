export default class Input {
  constructor(input, output) {
    this.slider = document.getElementById(input);
    this.output = document.getElementById(output);
    this.output.innerHTML = this.slider.value;
    console.log(this.slider);
    this.slider.addEventListener("change", () => {
      this.output.innerHTML = this.slider.value;
    });
  }

  getValue() {
    return this.slider.value;
  }
}

