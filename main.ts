import Phaser from 'phaser';
import PlayScene from './PlayScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: PlayScene
};

const game = new Phaser.Game(config);
