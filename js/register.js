
let formularioRegister = document.querySelector("#formregister");
let emailRegister = document.querySelector("#email");
let passwordRegister = document.querySelector("#password");
let repetirPassword = document.querySelector("#repetir-password");
let errorRegister = document.querySelector(".error-register");

formularioRegister.addEventListener("submit", function(event) {
    event.preventDefault();

    let emailIngresado = emailRegister.value;
    let passwordIngresada = passwordRegister.value;
    let passwordRepetida = repetirPassword.value;

    if (emailIngresado === "") {
        errorRegister.innerText = "El email es obligatorio";
        return;
    }

    if (passwordIngresada === "") {
        errorRegister.innerText = "La contraseña es obligatoria";
        return;
    }

    if (passwordIngresada.length < 6) {
        errorRegister.innerText = "La contraseña debe tener al menos 6 caracteres";
        return;
    }

    if (passwordIngresada !== passwordRepetida) {
        errorRegister.innerText = "Las contraseñas no coinciden";
        return;
    }

    errorRegister.innerText = "";

    window.location.href = "./login.html";
});
