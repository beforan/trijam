import { Scene } from "phaser";
import { AssetKeys, AssetPaths } from "~/constants/assets";

const AnimKeys = {
  Down: "Down",
};

class Game extends Scene {
  player!: Phaser.Physics.Arcade.Sprite;
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  /**
   *
   */
  constructor(config: Phaser.Types.Scenes.SettingsConfig) {
    super(config);
  }

  preload() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.load.spritesheet(AssetKeys.Player, AssetPaths.Player, {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.image(AssetKeys.FloorTiles, AssetPaths.FloorTiles);
  }

  create() {
    const map = this.make.tilemap({
      data: [
        [0, 0, 0],
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3],
        [4, 4, 4],
        [5, 5, 5],
      ],
      width: 32,
      height: 32,
    });
    const floorTiles = map.addTilesetImage(AssetKeys.FloorTiles);
    map.createLayer(0, floorTiles, 100, 100);

    this.player = this.physics.add.sprite(10, 10, AssetKeys.Player);

    // this.anims.create({
    //   key: AnimKeys.Left,
    //   frames: this.anims.generateFrameNumbers(AssetKeys.Player, {
    //     start: 0,
    //     end: 3,
    //   }),
    //   frameRate: 10,
    //   repeat: -1,
    // });
    this.player.anims.create({
      key: AnimKeys.Down,
      frames: this.anims.generateFrameNumbers(AssetKeys.Player, {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // this.anims.create({
    //   key: AnimKeys.Right,
    //   frames: this.anims.generateFrameNumbers(AssetKeys.Player, {
    //     start: 5,
    //     end: 8,
    //   }),
    //   frameRate: 10,
    //   repeat: -1,
    // });
  }

  update() {
    // movement
    const speed = 100;
    const netVelocity = { x: 0, y: 0 };
    if (this.cursors.down.isDown) netVelocity.y += speed;
    if (this.cursors.up.isDown) netVelocity.y -= speed;
    if (this.cursors.left.isDown) netVelocity.x -= speed;
    if (this.cursors.right.isDown) netVelocity.x += speed;
    this.player.setVelocity(netVelocity.x, netVelocity.y);

    // movement animation
    if (netVelocity.x > 0) this.player.anims.play(AnimKeys.Down, true);
    else if (netVelocity.x < 0) this.player.anims.play(AnimKeys.Down, true);
    else if (netVelocity.y > 0) this.player.anims.play(AnimKeys.Down, true);
    else if (netVelocity.y < 0) this.player.anims.play(AnimKeys.Down, true);
    else
      this.player.anims.pause(this.player.anims.get(AnimKeys.Down).frames[3]);
  }
}

export { Game };
