const div_productos = document.querySelector(".productos");
const contador_carrito = document.querySelector("#contador-productos");

product_count = 0;
productos = [];

compras = [];

function agregar(prod) {
    compras.push(prod);
  actualizar();
}
function sacar(prod) {
  indice = this.compras.indexOf(prod);
  compras.splice(this.indice, 1);
  actualizar();
}
function actualizar() {
  contador_carrito.innerText = this.compras.length;
}

class Producto {
  constructor(nombre, precio, imagen = "img/product.jpg") {
    this.id = product_count++;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.#crear();
    this.#agregar_eventos()
    
  }

  #crear() {
    this.tags =
      '<div class="card producto" style="width: 18rem; height:20rem">' +
      `<img src="${this.imagen}" class="card-img-top" alt="...">` +
      '<div class="card-body">' +
      `<p class="card-text">${this.nombre}</p>` +
      `<p class="card-text">$${this.precio}</p>` +
      '<button class="btn btn-success">Añadir producto</button>' +
      "</div>" +
      "</div>";

    this.div = document.createElement("div");
    this.div.innerHTML = this.tags;
    div_productos.appendChild(this.div);
  }
  #agregar_eventos() {
    this.div.addEventListener("click", ()=>{
        agregar(this)
    });
  }
}
// funciones

// ejecuciones

nombres_productos = [
  ["zapatillas nike", 1900],
  ["chancletas genericas", 900],
  ["camiseta de algodón", 15],
  ["teléfono inteligente de gama media", 300],
  ["reloj de pulsera analógico", 50],
  ["lámpara de escritorio LED", 25],
  ["auriculares inalámbricos", 80],
  ["portátil de 15 pulgadas", 700],
  ["pantalones vaqueros de diseño", 60],
  ["mochila resistente al agua", 40],
  ["café gourmet (1 libra)", 10],
  ["paraguas plegable", 12],
  ["botella de vino tinto (750 ml)", 20],
  ["juego de ajedrez de madera", 35],
  ["tableta digitalizadora", 120],
  ["cámara de acción 4K", 150],
  ["silla de oficina ergonómica", 180],
  ["bicicleta de montaña", 350],
  ["impresora láser monocromática", 130],
  ["máquina de café espresso", 250],
];

for (p of nombres_productos) {
  n_prod = new Producto(p[0], p[1]);
  productos.push(n_prod);
}

document.querySelector("#botoncompras").addEventListener("click",()=>{
    nombres = []
    for (c of compras){
        nombres.push(c.nombre)
    }
    alert(nombres)
})