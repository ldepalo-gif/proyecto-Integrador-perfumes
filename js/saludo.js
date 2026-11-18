
let emailGuardado = localStorage.getItem("email");
let menuLogin = document.querySelector(".menu-login");
let menuRegistro = document.querySelector(".menu-registro");
let menuSaludo = document.querySelector(".menu-saludo");
let menuLogout = document.querySelector(".menu-logout");

if (emailGuardado !== null) {
    menuLogin.style.display = "none";
    menuRegistro.style.display = "none";
    menuSaludo.innerText = "Bienvenido: " + emailGuardado;
    menuLogout.style.display = "list-item";
} else {
    menuLogin.style.display = "list-item";
    menuRegistro.style.display = "list-item";
    menuSaludo.style.display = "none";
    menuLogout.style.display = "none";
}