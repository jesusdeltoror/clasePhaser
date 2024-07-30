// una funcion asincrona retorna una promesa
async function fAsincrona(a, b){
    return a+b
}


//console.log(fAsincrona());
/* fAsincrona(8,9)
    .then(data=>console.log(data))
    .catch(e=>console.log("Error: ",e))    */ 


function uno(a,b){
    return new Promise((resolve, reject) => {
        if( (typeof a!=="number") || (typeof b!=="number") ){
            reject("Algun valor que enviaste no es un numero")
        }
        resolve(a+b)
    },2000)
}
function dos(a,b){
    return new Promise((resolve, reject) => {
        if((typeof a!="number") || typeof b!="number"){
            reject("Algun valor que enviaste no es un numero")
        }
        resolve(a*b)
    },500)
}

async function test(){
    let x = await uno(2,3)
    let y = await dos(2,3)
    return x+y
}

test()
    .then(data=>console.log(data))