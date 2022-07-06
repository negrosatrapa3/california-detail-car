/* let nombre = "Agostina";
const edad = 15;
console.log(nombre); 
console.log(typeof(nombre)); 
console.log(typeof(edad)); */ 

/* let numeroUno = 10;
let numeroDos = 11;
let resultado = numeroUno + numeroDos;
console.log(resultado); */

/* let nombre = "Nicolas A";
let apellido = "Correa";

let resultado = nombre + " " +apellido;
console.log(resultado);
  */
/* let nombre = prompt ("ingrese el nombre");
console.log(nombre); */
/* let nombre = prompt("ingrese el nombre");
let saludo = "Hola"+ " " + nombre;
alert(saludo);
 */
/* let edad = 10; 

if(edad < 15){
    console.log("nesecitas un adulto responsable");
}else if(edad < 18){
    console.log("entras con un amigo");
}else{
    console.log("puedes entrar solo");
} */
/* let nombre = "Nico";
if(nombre){
    console.log("Hola", nombre);
}else{
    console.log("no hay nombre");
} */
/* let elNumero = Number(prompt("elige un numero"));

if (!isNaN(elNumero)){
    console.log("tu numero es la raiz cuadrada de" + " " + elNumero * elNumero);
}else{
console.log(" Ey. Porque no me diste un numero");
} */

let nombre = prompt("Ingrese un Nombre").toLowerCase();
let edad = parseInt(prompt("Ingresa la edad"));

if (nombre === "Nicolas" && edad > 27 || nombre === "valeria" && edad > 27){
    alert("Hola chicos");
}else{
    alert("¿Quien eres?")
}
