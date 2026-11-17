
let contenedorAleatorios = document.querySelector("#productos-aleatorios");
let contenedorVendidos = document.querySelector("#productos-vendidos");

fetch("https://dummyjson.com/products/category/smartphones?limit=10")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.products);

        contenedorAleatorios.innerHTML = "";

        for (let i = 0; i < data.products.length; i++) {
            let producto = data.products[i];

            contenedorAleatorios.innerHTML += `
                <article>
                    <img src="${producto.thumbnail}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>
                    <p class="precio">$${producto.price}</p>
                    <a class="boton-detalle" href="./product.html?id=${producto.id}">
                        Ver detalle
                    </a>
                </article>
            `;
        }
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });



fetch("https://dummyjson.com/products/category/groceries?limit=10")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.products);

        contenedorVendidos.innerHTML = "";

        for (let i = 0; i < data.products.length; i++) {
            let producto = data.products[i];

            contenedorVendidos.innerHTML += `
                <article>
                    <img src="${producto.thumbnail}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>
                    <p class="precio">$${producto.price}</p>
                    <a class="boton-detalle" href="./product.html?id=${producto.id}">
                        Ver detalle
                    </a>
                </article>
            `;
        }
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });
