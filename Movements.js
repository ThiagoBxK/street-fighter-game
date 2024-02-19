import { createImage } from "./functions.js";

// Todos os movimentos do personagem
class Movements {
  constructor() {
    this._instance = null;
    this.spriteIndex = 0;
    this.cutSize = {
      x: 72,
      y: 100,
    };
  }

  get click() {
    const name = "click";
    const handleMovement = (character) => {
      return character;
    };

    return handleMovement;
  }

  get walk() {
    const name = "walk";
    const handleMovement = (character) => {
      character.posX += character.walkSpeed;
      return character;
    };

    return handleMovement;
  }

  get walk_reverse() {
    const name = "walk_reverse";
    const handleMovement = (character) => {
      character.posX -= character.walkReverseSpeed;
      return character;
    };

    return handleMovement;
  }

  // Obter um movimento da lista de movimentos
  getMovement(movementName) {
    const image = createImage(
      `./characters/zangief/sprites/${movementName}.png`
    );
    const spriteCount = parseInt(image.width / this.cutSize.x);

    return {
      image,
      spriteIndex: this.spriteIndex,
      spriteCount,
      cutSize: this.cutSize,
      handleMovement: this[movementName],
    };
  }

  static get instance() {
    if (!this._instance) this._instance = new Movements();

    return this._instance;
  }
}

export default Movements;
