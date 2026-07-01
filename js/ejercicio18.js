let distancia = Number(prompt("Ingrese la distancia en kilómetros"));

if (distancia <= 10) {
    alert("El envío cuesta $100");
} else if (distancia <= 50) {
    alert("El envío cuesta $250");
} else {
    alert("El envío cuesta $500");
}