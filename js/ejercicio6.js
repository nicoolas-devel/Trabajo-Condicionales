let numero1 = Number(prompt("Ingrese el primer número"));
let numero2 = Number(prompt("Ingrese el segundo número"));

let operacion = prompt("Ingrese una operación (+, -, *, /)");

if (operacion === "+") {
    alert("Resultado: " + (numero1 + numero2));
} else if (operacion === "-") {
    alert("Resultado: " + (numero1 - numero2));
} else if (operacion === "*") {
    alert("Resultado: " + (numero1 * numero2));
} else if (operacion === "/") {
    alert("Resultado: " + (numero1 / numero2));
} else {
    alert("Operación inválida.");
}