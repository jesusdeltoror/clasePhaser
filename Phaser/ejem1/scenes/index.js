import { Start } from "./start.js"
import { Level1 } from "./level1.js"

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 400,
    scene: [Start, Level1]
}

let game = new Phaser.Game(config)