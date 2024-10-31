import Phaser from 'phaser';

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super('PlayScene');
  }

  preload() {
    this.generateSolidTexture('sky', 800, 600, 0x87CEEB);
  }

  create() {
    this.add.image(400, 300, 'sky');
  }

  update() {
    // Game logic goes here
  }

  generateSolidTexture(name: string, width: number, height: number, color: number) {
    const graphics = this.make.graphics({ x: 0, y: 0, add: false });
    graphics.fillStyle(color, 1);
    graphics.fillRect(0, 0, width, height);
    graphics.generateTexture(name, width, height);
    graphics.destroy();
  }
}
