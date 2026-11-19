let botonLogout = document.querySelector(".menu-logout a");

if (botonLogout !== null) {
    botonLogout.addEventListener("click", function(event) {
        event.preventDefault();

        localStorage.removeItem("email");

        window.location.href = "./index.html";
    });
}
