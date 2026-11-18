
let listaCategorias = document.querySelector(".lista-categorias");

fetch("https://dummyjson.com/products/categories")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        listaCategorias.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            listaCategorias.innerHTML += `
                <li>
                    <a href="./category.html?categoria=${data[i].slug}">
                        ${data[i].name}
                    </a>
                </li>
            `;
        }
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });

let contenedorProductos = document.querySelector(".grillaproductos");

if (contenedorProductos != null) {

    let parametros = new URLSearchParams(window.location.search);
    let categoria = parametros.get("categoria");

    let tituloCategoria = document.querySelector(".secciontitulo");
    let contadorCategoria = document.querySelector(".contadorcategoria");

    if (categoria != null) {

        fetch("https://dummyjson.com/products/category/" + categoria)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);

                tituloCategoria.innerText = categoria.replaceAll("-", " ");
                contadorCategoria.innerText = data.products.length + " productos";

                contenedorProductos.innerHTML = "";

                for (let i = 0; i < data.products.length; i++) {
                    contenedorProductos.innerHTML += `
                        <article class="productocard">
                            <div class="productocardimg">
                                <img src="${data.products[i].images[0]}" alt="${data.products[i].title}">
                            </div>

                            <div class="productocardinfo">
                                <h3>${data.products[i].title}</h3>
                                <p>${data.products[i].description}</p>
                                <p>$${data.products[i].price}</p>
                                <a href="./product.html?id=${data.products[i].id}">Ver detalle</a>
                            </div>
                        </article>
                    `;
                }
            })
            .catch(function(error) {
                console.log("El error es: " + error);
            });
    }
}
