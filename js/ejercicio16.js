let numeroSecreto = Math.floor(Math.random() * 10) + 1;

let numero = Number(prompt("Adivine el número del 1 al 10"));

if (numero === numeroSecreto) {
    alert("¡Felicitaciones! Adivinaste el número.");
} else if (numero > numeroSecreto) {
    alert("El número ingresado es mayor que el número secreto.");
} else {
    alert("El número ingresado es menor que el número secreto.");
}