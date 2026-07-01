let escala = prompt("Ingrese C para Celsius o F para Fahrenheit");

if (escala === "C") {
    let celsius = Number(prompt("Ingrese la temperatura en Celsius"));
    let fahrenheit = (celsius * 9 / 5) + 32;

    alert("Equivale a " + fahrenheit + "°F");

    if (celsius < 35) {
        alert("Hipotermia");
    } else if (celsius <= 37.5) {
        alert("Temperatura normal");
    } else {
        alert("Fiebre");
    }

} else if (escala === "F") {
    let fahrenheit = Number(prompt("Ingrese la temperatura en Fahrenheit"));
    let celsius = (fahrenheit - 32) * 5 / 9;

    alert("Equivale a " + celsius + "°C");

    if (celsius < 35) {
        alert("Hipotermia");
    } else if (celsius <= 37.5) {
        alert("Temperatura normal");
    } else {
        alert("Fiebre");
    }

} else {
    alert("Escala no válida");
}