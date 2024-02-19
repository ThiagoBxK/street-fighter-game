import Movements from "./Movements.js";

class Character {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.movements = Movements.instance;
    this.frames = 0;

    this.character = {
      movement: null, // Movimento atual do personagem
      posX: 0,
      posY: 10,
      walkSpeed: 8,
      walkReverseSpeed: 8,
      jumpSpeed: 1,
    };

    // Movimento default
    this.setMovement("click");
  }

  // Setar um novo movimento ao personagem
  setMovement(movementName) {
    this.character.movement = this.movements.getMovement(movementName);
  }

  handleMovement() {
    if (this.character.movement.handleMovement)
      this.character.movement.handleMovement(this.character);
  }

  update() {
    this.frames++;

    const { spriteIndex, spriteCount } = this.character.movement;

    // Muda o sprite
    if (this.frames % 4 === 0) {
      if (spriteIndex >= spriteCount - 1) {
        this.character.movement.spriteIndex = 0;
      } else {
        ++this.character.movement.spriteIndex;
      }
    }

    this.draw();
  }

  draw() {
    const { image, spriteIndex, cutSize } = this.character.movement;

    // Personagem fica na posição 0 em relação ao chão
    const posY = canvas.height - cutSize.y - this.character.posY;

    this.context.drawImage(
      image,
      cutSize.x * spriteIndex,
      0,
      cutSize.x,
      cutSize.y,
      this.character.posX,
      posY,
      cutSize.x,
      cutSize.y
    );
  }
}

export default Character;
