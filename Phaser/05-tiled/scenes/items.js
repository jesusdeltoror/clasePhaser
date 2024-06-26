export class Items {
    constructor(scene){
        this.myScene = scene
        this.GlodMoneda = 0
    }

    preload(){
        
    }

    create(){
        
    }

    recolectaMonedas(data){
        this.GlodMoneda++
        return true
    }

    getGoldMoneda(){
        return this.GlodMoneda
    }
}