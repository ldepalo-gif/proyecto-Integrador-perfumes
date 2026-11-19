
let formularioLogin = document.querySelector("#formlogin");let email = document.querySelector("#email");
let password = document.querySelector("#password");
let errorLogin = document.querySelector(".error-login");

formularioLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    let emailIngresado = email.value;
    let passwordIngresada = password.value;

if (emailIngresado === "") {
    errorLogin.innerText = "El email es obligatorio";
    return;
}
if (passwordIngresada === "") {
    errorLogin.innerText = "La contraseña es obligatoria";
    return;
}
if (passwordIngresada.length < 6) {
    errorLogin.innerText = "La contraseña debe tener al menos 6 caracteres";
    return;
}
errorLogin.innerText = "";

localStorage.setItem("email", emailIngresado);
git 
window.location.href = "./index.html";

});