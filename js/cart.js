/* Shopping cart and checkout */
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cart = getCart();
  if (!cartItems) return;
  if (!cart.length) {
    cartItems.innerHTML = '<p>Your cart is empty. <a href="menu.html">View the menu</a>.</p>';
    document.getElementById("cart-total").textContent = "R0.00";
    return;
  }
  let total = 0;
  cartItems.innerHTML = cart.map(item => {
    const product = products.find(productItem => productItem.id === item.id);
    const subtotal = product.price * item.quantity;
    total += subtotal;
    return `<article class="cart-row">
      <div><h2>${product.name}</h2><p>R${product.price.toFixed(2)} each</p></div>
      <label>Quantity <input type="number" min="1" max="20" value="${item.quantity}" data-quantity="${item.id}"></label>
      <strong>R${subtotal.toFixed(2)}</strong>
      <button type="button" class="small-button" data-remove="${item.id}">Remove</button>
    </article>`;
  }).join("");
  document.getElementById("cart-total").textContent = `R${total.toFixed(2)}`;
  cartItems.querySelectorAll("[data-quantity]").forEach(input => input.addEventListener("change", () => {
    const item = cart.find(entry => entry.id === Number(input.dataset.quantity));
    item.quantity = Math.max(1, Number(input.value));
    saveCart(cart);
    renderCart();
  }));
  cartItems.querySelectorAll("[data-remove]").forEach(button => button.addEventListener("click", () => {
    saveCart(cart.filter(entry => entry.id !== Number(button.dataset.remove)));
    renderCart();
  }));
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  const checkout = document.getElementById("checkout-form");
  checkout.addEventListener("submit", event => {
    event.preventDefault();
    const status = checkout.querySelector(".form-status");
    if (!getCart().length) {
      status.textContent = "Your cart is empty. Add a meal before checking out.";
      return;
    }
    if (!checkout.checkValidity()) {
      checkout.reportValidity();
      return;
    }
    status.textContent = "Order placed successfully. Your order number is SFK" + Date.now().toString().slice(-5) + ".";
    saveCart([]);
    checkout.reset();
    renderCart();
  });
});
