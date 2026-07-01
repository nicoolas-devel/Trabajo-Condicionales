let contraseña = prompt("Ingrese una contraseña");

if (contraseña.length >= 8) {
    alert("La contraseña es válida.");
} else {
    alert("La contraseña debe tener al menos 8 caracteres.");
}