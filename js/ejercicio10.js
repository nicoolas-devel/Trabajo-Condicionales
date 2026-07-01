let usuarioCorrecto = "admin";
let contraseñaCorrecta = "1234";

let usuario = prompt("Ingrese el usuario");
let contraseña = prompt("Ingrese la contraseña");

if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
    alert("Acceso permitido.");
} else {
    alert("Usuario o contraseña incorrectos.");
}