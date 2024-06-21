export class Player{
    constructor(scene){
        this.myScene = scene
    }
    
    preload(){
        this.myScene.load.image('playerRunF1','../assets/img/Player/Captain/10-Run Sword/Run Sword 01.png')
        this.myScene.load.image('playerRunF2','../assets/img/Player/Captain/10-Run Sword/Run Sword 02.png')
        this.myScene.load.image('playerRunF3','../assets/img/Player/Captain/10-Run Sword/Run Sword 03.png')
        this.myScene.load.image('playerRunF4','../assets/img/Player/Captain/10-Run Sword/Run Sword 04.png')
        this.myScene.load.image('playerRunF5','../assets/img/Player/Captain/10-Run Sword/Run Sword 05.png')
        this.myScene.load.image('playerRunF6','../assets/img/Player/Captain/10-Run Sword/Run Sword 06.png')
    
        this.myScene.load.image('playerIdleF1','../assets/img/Player/Captain/09-Idle Sword/Idle Sword 01.png')
        this.myScene.load.image('playerIdleF2','../assets/img/Player/Captain/09-Idle Sword/Idle Sword 02.png')
        this.myScene.load.image('playerIdleF3','../assets/img/Player/Captain/09-Idle Sword/Idle Sword 03.png')
        this.myScene.load.image('playerIdleF4','../assets/img/Player/Captain/09-Idle Sword/Idle Sword 04.png')
        this.myScene.load.image('playerIdleF5','../assets/img/Player/Captain/09-Idle Sword/Idle Sword 05.png')
    }

    create(){
        //Player---------------------------------------------------------

        //run
        this.myScene.anims.create({
            key:'Run',
            frames: [
                {key: 'playerRunF1'},
                {key: 'playerRunF2'},
                {key: 'playerRunF3'},
                {key: 'playerRunF4'},
                {key: 'playerRunF5'},
                {key: 'playerRunF6'}
            ],
            frameRate: 10,
            repeat: -1
        })
        //Idle
        this.myScene.anims.create({
            key:'Idle',
            frames: [
                {key: 'playerIdleF1'},
                {key: 'playerIdleF2'},
                {key: 'playerIdleF3'},
                {key: 'playerIdleF4'},
                {key: 'playerIdleF5'}
            ],
            frameRate: 10,
            repeat: -1
        })
        //Jump


        //Physics-------------------------------------------------
        this.Player = this.myScene.physics.add.sprite(50,50, 'playerRunF1')
        this.Player.setBounce(0.2);
        this.Player.setCollideWorldBounds(true);
        //Controles-----------------------------------------------
        
        this.keyD = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        this.keyA = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.keyW = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    }
    

    update(){
        if(this.keyD.isDown){
            this.Player.play('Run', true)
            this.Player.setVelocityX(160).setScale(2)
        }else if(this.keyA.isDown){
            this.Player.play('Run', true).setScale(-2,2)
            this.Player.setVelocityX(-160)
        }else{
            this.Player.setVelocityX(0).setScale(2)
            this.Player.play('Idle', true)
        }

        if(this.keyW.isDown /* && this.Player.body.touching.down */){
            console.log("w");
            this.Player.setVelocityY(-330);
        }
    }
}