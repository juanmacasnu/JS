function repeatHello(callback) {
    let time = setInterval(callback, 1000);
    setTimeout(() => clearInterval(time), 5000);
}

repeatHello(() => console.log("Hello"));