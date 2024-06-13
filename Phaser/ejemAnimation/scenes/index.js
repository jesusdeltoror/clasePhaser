import { Level1 } from "./level1.js"
import { SceneAnims } from "./testAnim.js"


const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [Level1, SceneAnims],
    scale: {
        mode: Phaser.RESIZE,
        autoCenter: Phaser.CENTER_BOTH
    }
}

let game = new Phaser.Game(config)