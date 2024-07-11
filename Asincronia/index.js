function uno (valor, callBack){
    setTimeout(()=>{
        let dato = 5*2
        callBack(valor, dato)
    },3000)
}


function dos(valor, callBack){
    setTimeout(()=>{
        let dato = 8*10
        callBack(valor,dato)
    }, 600)
}




uno("UNO",(valor, dato)=>{
    console.log(`VALOR : ${valor} DATO : ${dato}`);
    dos("DOS",(valor, dato)=>{
        console.log(`VALOR : ${valor} DATO : ${dato}`);
    })
})