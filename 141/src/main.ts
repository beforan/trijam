import "./style.css";
import Phaser from "phaser";
import { Game } from "./scenes/Game";

new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [Game],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
});
