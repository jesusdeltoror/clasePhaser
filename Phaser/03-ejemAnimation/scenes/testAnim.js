export class SceneAnims extends Phaser.Scene{
    constructor(){
        super({
            key: 'animtions',
            active: true
        })
    }

    preload(){
        this.load.image('playerRunF1','assets/img/Player/Captain/10-Run Sword/Run Sword 01.png')
        this.load.image('playerRunF2','assets/img/Player/Captain/10-Run Sword/Run Sword 02.png')
        this.load.image('playerRunF3','assets/img/Player/Captain/10-Run Sword/Run Sword 03.png')
        this.load.image('playerRunF4','assets/img/Player/Captain/10-Run Sword/Run Sword 04.png')
        this.load.image('playerRunF5','assets/img/Player/Captain/10-Run Sword/Run Sword 05.png')
        this.load.image('playerRunF6','assets/img/Player/Captain/10-Run Sword/Run Sword 06.png')
        
        this.load.image('playerIdleF1','assets/img/Player/Captain/09-Idle Sword/Idle Sword 01.png')
        this.load.image('playerIdleF2','assets/img/Player/Captain/09-Idle Sword/Idle Sword 02.png')
        this.load.image('playerIdleF3','assets/img/Player/Captain/09-Idle Sword/Idle Sword 03.png')
        this.load.image('playerIdleF4','assets/img/Player/Captain/09-Idle Sword/Idle Sword 04.png')
        this.load.image('playerIdleF5','assets/img/Player/Captain/09-Idle Sword/Idle Sword 05.png')

    }

    create(){
        //Player---------------------------------------------------------
        //run
        this.anims.create({
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
        this.PlayerRun = this.add.sprite(50,50, 'playerRunF1').setScale(2)
        //idle
        this.anims.create({
            key: 'Idle',
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
        this.PlayerIdle = this.add.sprite(50,120, 'playerIdleF1').setScale(2)

        //Controles-----------------------------------------------
        
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q)
                    
    }

    
    update(){
        if(this.keyD.isDown){
            this.PlayerRun.play('Run')
        }
        if(this.keyQ.isDown){
            this.PlayerIdle.play('Idle')
        }

    }
}

