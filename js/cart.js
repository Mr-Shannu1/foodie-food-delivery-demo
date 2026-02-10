let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartDiv = document.getElementById("cart");

function addToCart(item) {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  if (!cartDiv) return;

  let total = 0;
  cartDiv.innerHTML = "<h3>Cart</h3>";

  cart.forEach(i => {
    total += i.price;
    cartDiv.innerHTML += `<p>${i.name} - ₹${i.price}</p>`;
  });

  cartDiv.innerHTML += `<strong>Total ₹${total}</strong>
  <button onclick="checkout()">Checkout</button>`;
}

function checkout() {
  const order = {
    items: cart,
    total: cart.reduce((s,i)=>s+i.price,0),
    date: new Date().toLocaleString(),
    location: localStorage.getItem("selectedCity")
  };

  localStorage.setItem("pendingOrder", JSON.stringify(order));
  window.location.href = "payment.html";
}

renderCart();
