import "./style.css";
import Phaser from "phaser";

class MyScene extends Phaser.Scene {
  create() {
    this.add.text(10, 10, "Hello World");
  }
}

new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [MyScene],
});
