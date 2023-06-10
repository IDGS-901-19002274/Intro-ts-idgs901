class PilaEnteros{
    private vec : number[] = []
    insertar(x:number){
        this.vec.push(x)
    }
    extraer(){
        if (this.vec.length > 0){
            return this.vec.pop
        }
        else{
            return null
        }
    }
}

class PilaString{
    private vec : string[] = []

    insertar(x:string){
        this.vec.push(x)
    }

    extraer(){
        if (this.vec.length > 0){
            return this.vec.pop
        }
        else{
            return null
        }
    }
}

let pila1 = new PilaEnteros();
pila1.insertar(23)
pila1.insertar(28)
pila1.insertar(2)
console.log(pila1.extraer())

let pila2 = new PilaString()
pila2.insertar('23')
pila2.insertar('25')
pila2.insertar('2')
console.log(pila2.extraer())

//clase generica
class PilaGenerica<T>{
    private vec:T[] = []
    insertar(x:T){
        this.vec.push(x)
    }
    extraer(){
        if (this.vec.length > 0){
            return this.vec.pop
        }
        else{
            return null
        }
    }
}

let pila3 = new PilaGenerica<number>();
pila3.insertar(23)
pila3.insertar(28)
pila3.insertar(2)
console.log(pila1.extraer())

let pila4 = new PilaGenerica<string>()
pila4.insertar('23')
pila4.insertar('25')
pila4.insertar('2')
console.log(pila2.extraer())
//--------------------------------------------------------------------------------------
interface Animal{
    nombre : string
    edad : number
}

class Contenedor<T extends Animal>{
    private elemento:T[] = []
    insertar(x:T){
        this.elemento.push(x)
    }
    extraer():T[]{
        return this.elemento
    }
}

const contenedor = new Contenedor<Animal>()
contenedor.insertar({nombre : 'perro', edad : 23})
contenedor.insertar({nombre : 'gato', edad : 2})

const animales = contenedor.extraer()
console.log(animales)