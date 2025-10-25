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
