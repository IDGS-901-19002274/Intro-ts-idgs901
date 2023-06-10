/*
Typescript: Lenguaje con tipado estatico que permite 
detectar errores de asignacion en tiempo de desarrollo
*/

var num1 = 23
let num2 = 'rcr'
const num3 = 34

let version : number = 2.2
version = 23

let nombre : string = 'roberto'

let activo : boolean = true

let matricula : number | string | boolean = 1234
matricula = '1234'

let vector : number[] = [1, 2, 3, 4]

console.log(vector)