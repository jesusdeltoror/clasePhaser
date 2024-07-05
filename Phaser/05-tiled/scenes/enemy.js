export class Enemy {
    constructor(scene){
        this.myScene = scene
    }

    preload(){
        this.myScene.load.spritesheet('ranaIdle', '../assets/img/enemy/frog/Idlefrog.png', {frameWidth: 32, frameHeight:32})
        this.myScene.load.spritesheet('ranaRun', '../assets/img/enemy/frog/Runfrog.png', {frameWidth: 32, frameHeight:32})
        //this.myScene.load.spritesheet('ranaHit', '../assets/img/enemy/frog/Hitfrog', {frameWidth: 32, frameHeight:32})

        //JSON
        this.myScene.load.tilemapTiledJSON('enemyJSON', '../json/Level1.json')

    }

    create(){
        this.myScene.anims.create({
            key: 'RunRana',
            frames: this.myScene.anims.generateFrameNumbers('ranaRun', {start: 0, end: 12}),
            frameRate: 12,
            repeat: -1
        })

        this.map = this.myScene.make.tilemap({key: 'enemyJSON'})

        //capa de enemigos
        this.enemiesObj = this.map.getObjectLayer('Enemigos').objects

        //creamos grupo de enemigos
        this.enemies = this.myScene.physics.add.group()

        //agregamos enemigos al grupo
        this.enemiesObj.forEach(element => {
            const enemy =  this.enemies.create(element.x, element.y - element.height, 'ranaRun')
            enemy.play('RunRana')
        });

        
    }

    update(){
        
    }
}   

