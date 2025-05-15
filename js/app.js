const products = [
  { name: "Fresa Cristalizada Natural", price: 65, image: "https://images.unsplash.com/photo-1572448862528-8d2e7f86f156" },
  { name: "Fresa con Chocolate Blanco", price: 70, image: "https://images.unsplash.com/photo-1617625803848-ff05552e7e30" },
  { name: "Fresa con Chocolate Amargo", price: 75, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
  { name: "Fresa con Chocolate con Leche", price: 70, image: "https://images.unsplash.com/photo-1618675529966-13fe69b2f570" },
  { name: "Fresas Light", price: 80, image: "https://images.unsplash.com/photo-1588776814546-ec7c618a2508" },
  { name: "Chocolate Oscuro en Tablilla", price: 90, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" }
];

const cart = [];
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const whatsappLink = document.getElementById("whatsapp-link");

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(div);
    total += item.price;
  });
  cartTotal.textContent = total;
  cartCount.textContent = cart.length;
  const message = encodeURIComponent("Hola, quiero pedir:\n" + cart.map(i => `- ${i.name} ($${i.price})`).join("\n") + "\n\nOpciones de pago:\n• Transferencia BBVA: 012345678901234567\n• WhatsApp.");
  whatsappLink.href = `https://wa.me/523411122270?text=${message}`;
}

products.forEach(prod => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img src="${prod.image}" alt="${prod.name}">
    <h3>${prod.name}</h3>
    <p>$${prod.price} MXN / 100g</p>
    <button class="boton" onclick='addToCart(${JSON.stringify(prod)})'>Agregar al carrito</button>
  `;
  productList.appendChild(div);
});

function addToCart(product) {
  cart.push(product);
  updateCart();
}
