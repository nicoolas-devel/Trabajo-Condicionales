let edad = Number(prompt("Ingrese su edad"));
let clasificacion = prompt("Ingrese la clasificación de la película (+13 o +18)");

if (clasificacion === "+13") {
    if (edad >= 13) {
        alert("Puede ver la película.");
    } else {
        alert("No puede ver la película.");
    }
} else if (clasificacion === "+18") {
    if (edad >= 18) {
        alert("Puede ver la película.");
    } else {
        alert("No puede ver la película.");
    }
} else {
    alert("Clasificación no válida.");
}