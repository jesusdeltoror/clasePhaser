let suma = 0;
self.addEventListener("message", ()=>{
    suma = 0
    for(let i=0; i<=100000; i++){
        suma += i
        console.log(suma)
        self.postMessage(suma)
    }
})

