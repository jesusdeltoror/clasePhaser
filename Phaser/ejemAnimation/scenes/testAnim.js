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
    }

    create(){
        //Player
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
        this.PlayerRun = this.add.sprite(50,50, 'playerRunF1')
        //Controles-----------------------------------------------
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
                    
    }

    update(){
        if(this.keyD.isDown){
            this.PlayerRun.play('Run')
        }
    }
}

