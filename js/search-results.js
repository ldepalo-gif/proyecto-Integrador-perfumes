
let formularioBusqueda = document.querySelector(".form-busqueda");
let campoBusqueda = document.querySelector(".form-busqueda input");
let errorBusqueda = document.querySelector(".error-busqueda");

formularioBusqueda.addEventListener("submit", function(event) {
    event.preventDefault();

    if (campoBusqueda.value === "") {
        if (errorBusqueda !== null) {
            errorBusqueda.innerText = "El campo de búsqueda no puede estar vacío";
        }
    } else if (campoBusqueda.value.length < 3) {
        if (errorBusqueda !== null) {
            errorBusqueda.innerText = "La búsqueda debe tener al menos 3 caracteres";
        }
    } else {
        if (errorBusqueda !== null) {
            errorBusqueda.innerText = "";
        }
        this.submit();
    }
});


let parametrosBusqueda = new URLSearchParams(window.location.search);
let terminoBuscado = parametrosBusqueda.get("busqueda");

let textoResultados = document.querySelector(".resultadosquery");
let grillaResultados = document.querySelector("#resultados .grillaproductos");

if (terminoBuscado !== null && grillaResultados !== null) {

    textoResultados.innerText = "Resultados de búsqueda para: " + terminoBuscado;

    fetch("https://dummyjson.com/products/search?q=" + terminoBuscado)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            if (data.products.length === 0) {
                grillaResultados.innerHTML = "<p>No hay resultados para el término: " + terminoBuscado + "</p>";
            } else {

                for (let i = 0; i < data.products.length; i++) {

                    grillaResultados.innerHTML += `
                        <article class="productocard">
                            <div class="productocardimg">
                                <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
                            </div>
                            <div class="productocardinfo">
                                <h3>${data.products[i].title}</h3>
                                <p>${data.products[i].description}</p>
                                <p class="precio-search">$${data.products[i].price}</p>
                                <a class="boton-search" href="./product.html?id=${data.products[i].id}">Ver detalle</a>
                            </div>
                        </article>
                    `;
                }
            }
        });
}
