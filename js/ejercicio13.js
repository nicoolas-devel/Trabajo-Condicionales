let usuario = prompt("Ingrese su nombre de usuario");
let rol = prompt("Ingrese su rol");

if (rol === "admin") {
    alert("Acceso total");
} else if (rol === "editor") {
    alert("Puede editar contenido");
} else if (rol === "invitado") {
    alert("Solo puede visualizar contenido");
} else {
    alert("Rol no válido");
}