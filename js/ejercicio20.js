let color = prompt("Ingrese un color del semáforo");

if (color === "rojo") {
    alert("Detenerse");
} else if (color === "amarillo") {
    alert("Precaución");
} else if (color === "verde") {
    alert("Avanzar");
} else {
    alert("Color no válido");
}