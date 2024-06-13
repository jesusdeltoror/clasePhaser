export class Start extends Phaser.Scene{
    constructor(){
        super({key: 'start'})
    }

    preload(){
        this.load.image('poke1', 'assets/img/pig.png')
        this.load.image('btnNext', 'assets/img/next.png')
    }
    create(){
        this.add.image(400,200, 'poke1')
        this.boton = this.add.image(20,20, 'btnNext').setInteractive()
        this.boton.on('pointerdown', ()=>{
            this.scene.start('level1')
        })
    }
}