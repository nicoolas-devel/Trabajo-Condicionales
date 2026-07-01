let numero1 = Number(prompt("Ingrese el primer número"));
let numero2 = Number(prompt("Ingrese el segundo número"));
let numero3 = Number(prompt("Ingrese el tercer número"));

if (numero1 >= numero2 && numero1 >= numero3) {
    alert("El número mayor es: " + numero1);
} else if (numero2 >= numero1 && numero2 >= numero3) {
    alert("El número mayor es: " + numero2);
} else {
    alert("El número mayor es: " + numero3);
}