let valor = 10

/* const p = new Promise((resolve, reject)=>{
    if(valor == 10){
        resolve({
            valor,
            op: valor + 5
        })    
    }else{
        reject("ERROR algo salio mal")
    }
}) */

function prom1(value){
    return new Promise((resolve, reject)=>{
        if(value == 10){
            setTimeout(()=>{
                resolve({
                    id: "proom1",
                    value,
                    op: value + 6
                })  
            },Math.random()*1000)  
        }else{
            reject("ERROR algo salio mal")
        }
    })    
}
function prom2(value){
    return new Promise((resolve, reject)=>{
        if(value > 10){
            setTimeout(()=>{
                resolve({
                    id: "prom2",
                    value,
                    op: value - 5
                })  
            },Math.random()*1000)  
        }else{
            reject("ERROR algo salio mal")
        }
    })    
}



prom1(valor)
    .then((data)=>{
        console.log(data);
        console.log(data.op);
        return prom2(data.op)
    })
    .then((data)=>{
        console.log(data);
    })