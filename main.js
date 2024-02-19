import Character from "./Character.js";
import Scenario from "./Scenario.js";

const canvas = document.getElementById("canvas");

const character = new Character(canvas);
const scenario = new Scenario(canvas, "japan");

let frames = 0;

function loop() {
  scenario.draw();
  character.update();

  ++frames;

  setTimeout(() => loop(), 41);
}

function run() {
  loop();
}

run();

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyA") {
    character.setMovement("walk_reverse");
    character.handleMovement();
  } else if (event.code === "KeyD") {
    character.setMovement("walk");
    character.handleMovement();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "KeyA") {
    character.setMovement("click_reverse");
    character.handleMovement();
  } else if (event.code === "KeyD") {
    character.setMovement("click");
    character.handleMovement();
  }
});
