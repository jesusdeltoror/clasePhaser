const dataPoke = document.querySelector(".dataPoke")


//console.log(fetch("https://pokeapi.co/api/v2/pokemon/2"));

fetch("./test.json")
    .then( dato=>{
        return dato.json()
    })
    .then( dato =>{
        console.log(dato);
    })
    .catch(e=>console.log(e))