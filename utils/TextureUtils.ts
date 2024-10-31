import Phaser from 'phaser';

export default class TextureUtils {
  static generateSolidTexture(scene: Phaser.Scene, name: string, width: number, height: number, color: number) {
    const graphics = scene.make.graphics({ x: 0, y: 0, add: false });
    graphics.fillStyle(color, 1);
    graphics.fillRect(0, 0, width, height);
    graphics.generateTexture(name, width, height);
    graphics.destroy();
  }
}
