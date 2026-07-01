let edad = Number(prompt("Ingrese su edad"));

if (edad < 13) {
    alert("Es un niño");
} else if (edad < 18) {
    alert("Es un adolescente");
} else if (edad < 60) {
    alert("Es un adulto");
} else {
    alert("Es un adulto mayor");
}