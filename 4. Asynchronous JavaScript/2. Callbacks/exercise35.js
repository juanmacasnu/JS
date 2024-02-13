function repeatHello(callback) {
    setInterval(callback, 1000)
}

repeatHello(() => console.log("Hello"));

//Al ser una función tan fácil, no es necesario crear una función aparte. Además, optimiza el código en cuanto a limpieza y lectura del mismo.