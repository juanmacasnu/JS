const isLogged = true;

const promesa = new Promise((resolve, reject) => {

    isLogged  ? resolve(Math.random()) : reject ("error");

});

function promesa2(numero) {

    return new Promise((resolve, reject) => {
        if (typeof numero === "number" && numero >= 0.5) {
            resolve({name: "John", age: 24});
        }
        
        else {
            reject(`el numero ${numero} es menor`)
        }
    })

}

promesa 
.then ((numero) => promesa2(numero))
.then ((objeto) => console.log(objeto))
.catch ((error) => console.error(error))
.finally(() => console.log("C'est fini"))
