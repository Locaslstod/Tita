// Buscador productos
const buscar = document.getElementById("buscar");
buscar.addEventListener("input", () => {
  const term = buscar.value.toLowerCase();
  document.querySelectorAll(".producto").forEach(prod => {
    prod.style.display = prod.querySelector("h3").textContent.toLowerCase().includes(term) ? "block" : "none";
  });
});

// Animación de entrada: aplicar delay dinámico
document.querySelectorAll(".producto").forEach((prod, i) => {
  prod.style.animationDelay = `${i * 0.05}s`;
});
// ===============================
// 🛒 SISTEMA TITA STORE (versión local)
// ===============================
var Tita = Tita || {};

Tita.store = {
  id: 1,
  name: "Tita Ollas",
  url: "https://locaslstod.github.io/Tita/",
  currency: {
    code: "ARS",
    symbol: "$",
    thousands_separator: ".",
    decimal_separator: ",",
  },
  country: "AR",
  lang: "es_AR",
  theme: {
    name: "TitaCustom",
    colors: {
      primary: "#e67e22",
      secondary: "#2c3e50",
      background: "#f8f6f3",
    },
  },
};

// ===============================
// 🛍️ Carrito
// ===============================
Tita.cart = {
  items: JSON.parse(localStorage.getItem("tita_cart") || "[]"),

  add(product) {
    let existing = this.items.find((i) => i.id === product.id);
    if (existing) {
      existing.qty += product.qty;
    } else {
      this.items.push(product);
    }
    this.save();
    this.render();
  },

  remove(id) {
    this.items = this.items.filter((i) => i.id !== id);
    this.save();
    this.render();
  },

  subtotal() {
    return this.items.reduce((acc, item) => acc + item.price * item.qty, 0);
  },

  save() {
    localStorage.setItem("tita_cart", JSON.stringify(this.items));
  },

  render() {
    const cartBox = document.querySelector("#cart-content");
    if (!cartBox) return;

    if (this.items.length === 0) {
      cartBox.innerHTML = "<p>🛍️ Tu carrito está vacío</p>";
      return;
    }

    cartBox.innerHTML = this.items
      .map(
        (p) => `
        <div class="cart-item">
          <span>${p.name}</span>
          <span>${Tita.store.currency.symbol}${p.price.toFixed(2)}</span>
          <span>x${p.qty}</span>
          <button onclick="Tita.cart.remove(${p.id})">❌</button>
        </div>`
      )
      .join("");

    const total = this.subtotal().toLocaleString("es-AR", {
      minimumFractionDigits: 2,
    });
    cartBox.innerHTML += `<hr><b>Total: ${Tita.store.currency.symbol}${total}</b>`;
  },
};

// ===============================
// ⚡ Utilidades
// ===============================
Tita.addToCart = function (id, name, price) {
  Tita.cart.add({ id, name, price, qty: 1 });
  alert(`${name} agregado al carrito 🧡`);
};

// Inicializar al cargar
document.addEventListener("DOMContentLoaded", () => {
  Tita.cart.render();
});
