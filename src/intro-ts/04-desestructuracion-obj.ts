interface Alumno1 {
    matricula1 : number
    nombre : string
    edad : number
    correo : string
    grupo : Grupo
}

interface Grupo {
    grupo : string
    year : number
}

const Alumno2 : Alumno1 = {
    matricula1 : 19002274,
    nombre : 'Mario',
    edad : 24,
    correo : 'Mariovenudo@gmail.com',
    grupo : {
        grupo : 'idgs',
        year : 2023
    }
}

console.log('La matricula es: ${alumno2.matricula1}')
console.log('El nombre es: ${alumno2.nombre}')
console.log('El año del grupo es: ${alumno2.grupo.year}')

const {matricula1, nombre:nom, grupo:xx} = Alumno2
const {grupo, year:anio} = xx;

console.log('La matricula es: ${matricula1}')
console.log('La nombre es: ${nom}')
console.log('La grupo es: ${grupo}')
console.log('La anio es: ${anio}')

//desestructuracion de arreglos
const gps:string[] = ['IDGS', 'IEVN', 'REDES']
console.log('grupo1 : ${gps[0]}')
console.log('grupo2 : ${gps[1]}')
console.log('grupo3 : ${gps[2]}')

const[a,,b] = gps
console.log('Grupo1: ${a}')