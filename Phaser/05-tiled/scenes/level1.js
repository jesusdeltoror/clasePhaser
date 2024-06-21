import { Player } from "./player.js"
import { Plataformas } from "./plataformas.js"

export class Level1 extends Phaser.Scene{
    constructor(){
        super({
            key: "level1"
        })
        this.player = new Player(this)
        this.Plataformas = new Plataformas(this)
    }

    preload(){
        this.load.image('fondo', '../assets/img/fondo/fondo.jpg')
        
        this.Plataformas.preload()
        
        this.player.preload()
    }

    create(){
        this.fondo = this.add.image(0, 0, 'fondo').setOrigin(0, 0)
        this.fondo.displayWidth = this.sys.game.config.width
        this.fondo.displayHeight = this.sys.game.config.height
                
        this.Plataformas.create()
        
        this.player.create()
        
        this.physics.add.collider(this.player.Player, this.Plataformas.layer1)
    }

    update(){
        this.player.update()
    }
}