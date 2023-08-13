// ANCHOR VARIABLES ---> let y cons (VAR ya no se usa)
// variables - son cajitas donde puedo guardar algo, son ilimitadas. Aqui guardamos muuuuuchas cosas, nombres, precios, fechas, etc.
//todo tiene variables

//ANCHOR - palabras reservadas- son palabras que cambian de color y cambian de significado cada que las uso.

let edad = 25 //si uso let puedo reasignar el valor de la variable mas adelante
const apellido = "perez";  //si uso const no puedo cambiar el valor de la variable, porque esta será constante.

console.log(edad);
console.log(apellido);
//ANCHOR - cuando uso console, y pongo el nombre de la variables, me va a devolver lo que esta dentro de esa variable.

edad = edad + 1; //como la variable edad ya esta definida pero es tipo let entonces puedo reasignar el valor de esta manera.
console.log(edad);

// LINK ESTO NO SE PUEDE POR QUE ES UNA CONSTANTE
// apellido = "otra cosa"
// console.log(apellido)

// ANCHOR ---> TIPOS DE DATOS ---> primitivos

// STRING ---> cadena de texto
let nombre = "pepe"

// NUMBER ---> numeros
let numeroDeLaSuerte = 22

// BOOLEAN ---> true - false
let isLogged = true

// UNDEFINED 
let nombreDeUsuario = undefined

console.log(nombreDeUsuario)


// NULL
let datos = null

// NaN --> not a number

let x = 1
let y = "pepe"

let z = x * y

console.log(z)

// ANCHOR ---> OPERADORES

// LINK ---> matematicos

let n1 = 13
let n2 = 6

console.log( n1 + n2)
console.log( n1 - n2)
console.log( n1 * n2)
console.log( n1 / n2)
// MODULO %
console.log( n1 % n2 )

// CONCATENAR ---> JUNTAR 


let saludo = "hola" + " " + nombre + " " + "como estas?"

console.log(saludo)

// TEMPLATE LITERALS ---> BACKSTICKS
let saludoBien = `hola ${nombre} como estas?` 
console.log(saludoBien)


// LINK ---> comparacion ---> SIEMPRE DEVUELVE UN BOOLEANO

let numeroUno = 5 
let numeroDos = "5"
// console.log( numeroUno == numeroDos) // ---> simple
// console.log( numeroUno != numeroDos) // ---> simple

console.log( numeroUno === numeroDos) // ---> estricta
console.log( numeroUno !== numeroDos) // ---> estricta
// console.log( numeroUno > numeroDos)
// console.log( numeroUno < numeroDos)
// console.log( numeroUno >= numeroDos)
// console.log( numeroUno <= numeroDos)

console.log("------------")
// LINK ---> logicos
// FALSY´s ---> 0 --- "" --- undefined --- null
// TRUTHY´s ---> 1 --- "mama"

// AND ---> &&

let estaLogueado = false
let esAdmin = false

// SE QUEDA CON EL ULTIMO TRUTHY SI SON TODOS TRUTHY
// SE QUEDA CON EL PRIMER FALSY
let tienePermiso =  estaLogueado === true && 0 && undefined && esAdmin === true && "mama" && 1
console.log(tienePermiso)

// OR ---> ||
let tienePermisoDos = false || false  || 0 || "mama" ||  ""
console.log(tienePermisoDos)


// NOT ---> !

let f = false 
console.log( !f )


