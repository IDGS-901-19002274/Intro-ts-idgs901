function sumar(a : number, b : number) : void {
    console.log(a + b)
}

let num = sumar(8, 7)

function sumar2(a : number, b : number) : number {
    let tem = a + b
    return tem
}

function operasbas(n1 : number, n2 : number,  n3 : number = 2) : number {
    let tem = n1 * n3 * n2
    return tem
}

console.log(operasbas(3, 0 , 5))

interface Mascota {
    nombre : string,
    edad : number,
    mostrarEdad : () => void
}

function calcularEdad(mascota : Mascota, x : number) : void {
    mascota.edad += x
    console.log(mascota)
}

const nuevaMascota : Mascota = {
    nombre: "Miaw",
    edad: 3,
    mostrarEdad: function (): void {
        console.log('La edad es: ', this.edad)
    }
}
calcularEdad(nuevaMascota, 2)

const funcSumar = function(n1 : number, n2 : number) : number {
    return n1 + n2
}

console.log(funcSumar(2, 3))

//Parametros REST en funciones
function calcular2(...valores:number[]){
    let suma = 0;
    for (let x = 0; 0 < valores.length; x++){
        suma += valores[x];
    }
    return suma;
}

console.log(calcular2(10, 2, 3, 4))
console.log(calcular2(1, 2))