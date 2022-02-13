// areglos

var miArreglo = ["Jhon", 24];
console.log(miArreglo);

var estudiantes=["Ana", "Mario", "Elias", "Maria"];
console.log(estudiantes);


//areglos anidados.

var listaEstudiantes = [["Nora", 3.7], ["Gino", 4.2]];
console.log(listaEstudiantes);

//Acceder a los elementos de los arreglos

console.log(miArreglo[0]);
console.log(estudiantes[2]);

//modificar datos del arreglo

miArreglo[1]=25;
console.log(miArreglo);

//Acceder a los elementos de los arreglos anidados (multidimencionales)
console.log(listaEstudiantes[0][1]);

//agregar elementos al arreglo
miArreglo.push("bachiller");
console.log(miArreglo);

//Remover el ultimo elemento (guardar en variable)
retirado = estudiantes.pop();
console.log(estudiantes);
console.log(retirado);


//Remover el primer elemento (guardar en variable)
retirado2 = estudiantes.shift();
console.log(estudiantes);
console.log(retirado2);

//agregar elementos al principio del arreglo
estudiantes.unshift("Andres");
console.log(estudiantes);

//Funciones
function mostrarMensaje(){
    console.log("Hola Mundo");
}

mostrarMensaje();

//argumentos o parametros

function suma(a, b){
    var suma = a+b;
    console.log("El resultado de " + a + " + " + b + " es igual a " + suma);
}

suma(5, 3);
suma(10, 4);
var num1=18;
var num2=22;
suma(num1, num2);

//return

function resta(a, b){
   return a-b;
}
console.log(resta(20, 8));

//guardar en una variable
var resultado = resta(10, 4);
console.log(resultado);


//(queue)cola primero en llegar, primero en salir

function proximoEnLaFila(arreglo, elemento){
    arreglo.push(elemento);
    return arreglo.shift();
}
var miArreglito = [1, 2, 3, 4];
console.log("Antes: ", JSON.stringify(miArreglito));

console.log("Se atendió a " + proximoEnLaFila(miArreglito, 5))


console.log("Después: ", JSON.stringify(miArreglito));

