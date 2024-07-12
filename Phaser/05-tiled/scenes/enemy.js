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

    create(pPlayer){
        this.myScene.anims.create({
            key: 'RunRana',
            frames: this.myScene.anims.generateFrameNumbers('ranaRun', {start: 0, end: 11}),
            frameRate: 12,
            repeat: -1
        })
        this.myScene.anims.create({
            key: 'IdleRana',
            frames: this.myScene.anims.generateFrameNumbers('ranaIdle', {start: 0, end: 10}),
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
            this.enemy = this.enemies.create(element.x, element.y - element.height, 'IdleRana')
            
        });

        this.myScene.physics.add.collider(pPlayer, this.enemies, this.hitEnemy, null, this);
    }
    update(){
        

    }

    data(player, enemies){
        enemies.children.iterate(function(child){
            let distance = player.x-child.x

            if(child.body.velocity.x > 0 || child.body.velocity.x < 0){
                child.play('RunRana', true)
            }else{
                child.play('IdleRana', true)
            }
            
            if(Phaser.Math.Distance.BetweenPoints(player, child) < 180){
                if(distance>20){
                    child.setVelocityX(50)
                    child.flipX=false
                }else if(distance<-20){
                    child.setVelocityX(-50)
                    child.flipX=true
                }else{
                    child.setVelocityX(0)
                    
                }
            }else{
                child.setVelocityX(0)
            }
        })
    }

    hitEnemy(player, enemy){
        console.log(enemy.body);
        if(player.body.velocity.y > 0 && enemy.body.touching.up) {
            enemy.disableBody(true, true); // Elimina al enemigo
            player.setVelocityY(-200); // Rebota el jugador hacia arriba
        }else {
            // Aquí puedes manejar lo que sucede si el enemigo golpea al jugador
            player.disableBody(true, true)
        }
    }
}   

