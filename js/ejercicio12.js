let dia = Number(prompt("Ingrese el día"));
let mes = Number(prompt("Ingrese el mes"));
let año = Number(prompt("Ingrese el año"));

if (dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12 && año > 0) {
    alert("Fecha válida");
} else {
    alert("Fecha inválida");
}