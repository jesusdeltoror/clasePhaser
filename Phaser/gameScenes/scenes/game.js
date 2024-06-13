


window.onload = function(){
    let gameContainer = document.querySelector('#game')

    const config = {
        type: Phaser.AUTO,
        parent: "game",
        width: gameContainer.clientWidth,
        height: gameContainer.clientHeight,
        scene: [],
        scale: {
            mode: Phaser.Scale.RESIZE,
            autoCenter: Phaser.Scale.CENTER_BOTH
        }
    }

    const game = new Phaser.Game(config)

    window.addEventListener('resize', resizeGame)

    function resizeGame (){
        game.scale.resize(gameContainer.clientWidth, gameContainer.clientHeight)
    }
}

