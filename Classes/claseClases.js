class Mascota { 
    constructor (tipo, edad, nombre) {
        this.tipo = tipo;
        this.edad = Number(edad);
        this.nombre = nombre;
    }

    comer(){
        console.log(`${this.nombre} estoy comiendo`);
    }

    static dormir(){
        console.log("Estoy durmiendo");
    }

    get getEdad(){
        return this.edad;
    }

    set setEdad(newEdad){
        this.edad = newEdad;
    }
}

const newMascota = new Mascota ("gato", 5, "Michi");

console.log(newMascota.tipo);

class Gato extends Mascota {
    constructor (tipo, edad, nombre, maullar) {
        super(tipo, edad, nombre);
        this.maullar = maullar;
    }
}

const mariaGato = new Gato ("gato", 4, "Alue", "Si");

console.log(mariaGato.nombre);
mariaGato.comer();
//mariaGato.dormir(); ERROR, STATIC SOLO AFECTAA A LA CLASE ORIGINAL.

console.log(mariaGato.getEdad);
mariaGato.setEdad = 5;
mariaGato.edad = 5;
console.log(mariaGato.getEdad);