import { Player } from "./componentes.js"

export class Level1 extends Phaser.Scene{
    constructor(){
        super({
            key: "level1"
        })
        this.player = new Player(this)
    }

    preload(){
        this.load.image('fondo', 'assets/img/fondo.jpg')
        this.player.preload()
    }

    create(){
        this.fondo = this.add.image(0, 0, 'fondo').setOrigin(0, 0)
        this.fondo.displayWidth = this.sys.game.config.width
        this.fondo.displayHeight = this.sys.game.config.height

        this.player.p
        this.player.create()
    }

    update(){
        this.player.update()
    }
}