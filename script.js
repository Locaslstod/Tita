// --- Buscador ---
const buscar = document.getElementById("buscar");
buscar.addEventListener("input", () => {
  const term = buscar.value.toLowerCase();
  document.querySelectorAll(".producto").forEach(prod => {
    prod.style.display = prod.dataset.nombre.includes(term) ? "block" : "none";
  });
});

// --- Carrito ---
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const contador = document.getElementById("contador");
const listaCarrito = document.getElementById("listaCarrito");
const total = document.getElementById("total");
const modal = document.getElementById("carrito-modal");

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let suma = 0;
  carrito.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    suma += item.precio;
    listaCarrito.appendChild(li);
  });
  total.textContent = suma.toFixed(2);
  contador.textContent = carrito.length;
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

document.querySelectorAll(".agregar").forEach(btn => {
  btn.addEventListener("click", e => {
    const producto = e.target.closest(".producto");
    const nombre = producto.querySelector("h3").textContent;
    const precio = parseFloat(producto.querySelector(".precio").textContent.replace("$",""));
    carrito.push({ nombre, precio });
    actualizarCarrito();
  });
});

document.getElementById("verCarrito").addEventListener("click", e => {
  e.preventDefault();
  modal.classList.remove("oculto");
});

document.getElementById("cerrarCarrito").addEventListener("click", () => {
  modal.classList.add("oculto");
});

actualizarCarrito();

// --- Formulario de contacto ---
document.getElementById("form-contacto").addEventListener("submit", e => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  document.getElementById("respuesta").textContent = `¡Gracias, ${nombre}! Te contactaremos pronto.`;
  e.target.reset();
});
