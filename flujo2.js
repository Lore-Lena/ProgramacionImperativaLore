let edad = -1

if(edad <0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
} else if (edad<18){
    console.log("No puede pasar al bar.")
}else if (edad <21){
    console.log("Bienvenido, felicidades porque ahora tienes la mayoría de edad")
} else {
    console.log("Puede pasar al bar y tomar alcohol")
}

if(edad % 2 != 0){
    console.log("¿Sabías que tu edad es impar?")
}else {
    console.log("")
}
