

export class Plataformas{
    constructor(scene){
        this.myScene = scene
    }

    preload(){
        //patron1
        this.myScene.load.image('tiles', '../assets/img/tilesets/world_tileset.png')
        //patron2
        this.myScene.load.image('tiles2', '../assets/img/tilesets/nature-paltformer-tileset-16x16.png')
        //JSON
        this.myScene.load.tilemapTiledJSON('tilemapJSON', '../json/Level1.json')

        this.myScene.load.spritesheet('coin',
            '../assets/img/items/MonedaD.png',
            { frameWidth: 16, frameHeight: 16 }
        );
    }

    create(){
        //animacion moneda
        this.myScene.anims.create({
            key: 'spin',
            frames: this.myScene.anims.generateFrameNumbers('coin', { start: 0, end: 4 }),
            frameRate: 10,
            repeat: -1
        });

        this.map = this.myScene.make.tilemap({key: 'tilemapJSON'})
        this.tileset = this.map.addTilesetImage('patron1','tiles')
        this.tileset2 = this.map.addTilesetImage('patron2','tiles2')

        this.layer1 = this.map.createLayer("Plataformas", this.tileset, 0, 0)
        this.layer2 = this.map.createLayer("Cielo", this.tileset, 0, 0)
 
        //Obtenemos la capa Monedas
        this.coinsObj = this.map.getObjectLayer("Monedas").objects
        
        //Creamos grupo de monedas
        this.coins = this.myScene.physics.add.group({
            allowGravity: false,
            immovable: true
        })

        //Agregamos las monedas al grupo
        this.coinsObj.forEach(element => {
            const coin = this.coins.create(element.x, element.y - element.height, 'coin');
            coin.setOrigin(0, 0)
            coin.play('spin')
        });

        this.layer1.setCollisionByProperty({ collision: true });
        

    }

}