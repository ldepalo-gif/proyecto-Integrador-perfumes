let detalleProducto = document.querySelector("#detalle-producto");
let reviewsProducto = document.querySelector("#reviews-producto");

let parametros = new URLSearchParams(window.location.search);
let idProducto = parametros.get("id");
console.log(idProducto);

fetch("https://dummyjson.com/products/" + idProducto)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
    console.log(data);

    let nombreProducto = document.querySelector(".nombre-perfume");
    nombreProducto.innerText = data.title;
   
    let imagenProducto = document.querySelector(".imagen-blackopium");
    imagenProducto.src = data.thumbnail;
    
    let descripcionProducto = document.querySelector(".parrafo-producto");
    descripcionProducto.innerText = "Descripción: " + data.description;
    let precioProducto = document.querySelector(".precio");
    precioProducto.innerText = "Precio: $" + data.price;

    let marcaProducto = document.querySelector(".marca-product");
    marcaProducto.innerText = data.brand || "Marca no disponible";

    let datosProducto = document.querySelector(".datos-producto");
    datosProducto.innerHTML = `
    <p>Categoría:
        <a href="./category.html?categoria=${data.category}">
            ${data.category}
        </a>
    </p>
    <p>Stock: ${data.stock} unidades</p>
    `;
    
    datosProducto.innerHTML += `<p>Tags:</p><ul>`;
    for (let i = 0; i < data.tags.length && i < 3; i++) {
    datosProducto.innerHTML += `<li>${data.tags[i]}</li>`;
    }
    datosProducto.innerHTML += `</ul>`;
    
    reviewsProducto.innerHTML = "";

    for (let i = 0; i < data.reviews.length; i++) {
    reviewsProducto.innerHTML += `
        <article>
            <p class="review-rating">${data.reviews[i].rating}/5 ★</p>
            <p class="review-comentario">${data.reviews[i].comment}</p>
            <p class="review-fecha">Fecha: ${data.reviews[i].date}</p>
            <p class="review-usuario">Usuario: ${data.reviews[i].reviewerName}</p>
        </article>
    `;
    }
    })
    
    .catch(function(error) {
        console.log("El error es: " + error);
    });