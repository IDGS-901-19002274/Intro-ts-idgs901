let vector1 : Array<number> = [9, 8, 7, 6]

vector1.push(10)
vector1[1] = 22

for(let tem of vector1)
    console.log(tem)

console.log(vector1)

let tem : (number | string)[] = []
tem.push('mario')
tem.push(23)
console.log(tem)

interface Alumno {
    matricula? : number //El ? Hace que sea opcional de rellenar alavergaaaaaaaaaaaa
    nombre : string
    edad : number
    email : string
}

const alumno : Alumno = {
    matricula : 19002274,
    nombre : 'mario',
    edad : 23,
    email : 'simon@bolivar.com'
}

console.table(alumno)