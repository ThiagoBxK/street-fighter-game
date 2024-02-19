import { createImage } from "./functions.js";

class Scenario {
  constructor(canvas, name) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");

    this.scenario = {
      image: createImage(`./scenarios/${name}.jpg`),
    };
  }

  draw() {
    const { image } = this.scenario;

    this.context.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }
}

export default Scenario;
