let ingreso = Number(prompt("Ingrese su ingreso"));

if (ingreso < 1000) {
    alert("No paga impuestos");
} else if (ingreso <= 5000) {
    alert("Debe pagar un 10% de impuestos");
} else {
    alert("Debe pagar un 20% de impuestos");
}