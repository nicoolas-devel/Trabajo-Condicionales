let compra = Number(prompt("Ingrese el monto de la compra"));

if (compra > 100) {
    let descuento = compra * 0.10;
    let total = compra - descuento;

    alert("Total con descuento: $" + total);
} else {
    alert("Total a pagar: $" + compra);
}