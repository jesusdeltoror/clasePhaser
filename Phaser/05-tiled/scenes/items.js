export class Items {
    constructor(scene){
        this.MyScene = scene
        this.GlodMoneda = 0
    }

    recolectaMonedas(data){
        this.GlodMoneda++
        return true
    }

    getGoldMoneda(){
        return this.GlodMoneda
    }
}