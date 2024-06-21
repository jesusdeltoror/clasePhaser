export class Level1 extends Phaser.Scene{
    constructor(){
        super({key: 'level1'})
    }

    preload(){
        this.load.image('ovni', 'assets/img/ovni.png')
    }
    create(){
        this.add.image(400,200, 'ovni')
    }
}