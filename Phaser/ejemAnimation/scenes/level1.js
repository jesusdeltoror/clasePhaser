export class Level1 extends Phaser.Scene{
    constructor(){
        super({
            key: "level1"
        })
    }

    preload(){
        this.load.image('fondo', 'assets/img/fondo.jpg')
    }

    create(){
        this.fondo = this.add.image(0, 0, 'fondo').setOrigin(0, 0)
        this.fondo.displayWidth = this.sys.game.config.width
        this.fondo.displayHeight = this.sys.game.config.height
    }
}