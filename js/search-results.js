let formulario = document.querySelector(".form-busqueda");
let campoBusqueda = document.querySelector(".form-busqueda input");
let errorBusqueda = document.querySelector(".error-busqueda");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (campoBusqueda.value.trim() === "") {
        errorBusqueda.innerText = "El campo de búsqueda no puede estar vacío";
    } else if (campoBusqueda.value.trim().length < 3) {
        errorBusqueda.innerText = "La búsqueda debe tener al menos 3 caracteres";
    } else {
        errorBusqueda.innerText = "";
        this.submit();
    }
});