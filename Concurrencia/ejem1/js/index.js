const btnSuma = document.querySelector("#btnSuma")
const ejmSuma = document.querySelector(".ejmS")
const btnSumaW = document.querySelector("#btnSumaW")
const ejmSumaW = document.querySelector(".ejmSW")
const btnColor = document.querySelector("#btnColor")
const ejmColor = document.querySelector(".ejmC")

let suma = 0
btnSuma.addEventListener('click', ()=>{
    suma = 0
    for(let i=0; i<=100000; i++){
        suma += i
        console.log(suma);
    }
    ejmSuma.textContent = suma
})

let valor = true;
btnColor.addEventListener('click', ()=>{
    if(valor == true){
        ejmColor.style.background = "red"
        valor = false
    }else{
        ejmColor.style.background = "blue"
        valor = true
    }
})


const hiloNuevo = new Worker("./js/hilo.js")
btnSumaW.addEventListener('click', ()=>{
    hiloNuevo.postMessage("Hola")
})

hiloNuevo.addEventListener("message",function(e){
    ejmSumaW.textContent = e.data
})