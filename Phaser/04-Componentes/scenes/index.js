import { Level1 } from "./level1.js"

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [Level1],
    scale: {
        mode: Phaser.RESIZE,
        autoCenter: Phaser.CENTER_BOTH
    }
}

let game = new Phaser.Game(config)