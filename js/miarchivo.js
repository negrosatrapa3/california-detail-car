let nombre = prompt("Ingrese un Nombre").toLowerCase();
let edad = parseInt(prompt("Ingresa la edad"));

if (nombre === "Nicolas" && edad > 27 || nombre === "valeria" && edad > 27){
    alert("Hola chicos");
}else{
    alert("¿Quien eres?")
}

/* desafio entregable 4 */
const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva   = x => x * 0.3;

let precioProducto = 1000;
let descuento = 30;

let nuevoPrecio = resta (suma(precioProducto, iva(precioProducto)), descuento); 

console.log(nuevoPrecio);