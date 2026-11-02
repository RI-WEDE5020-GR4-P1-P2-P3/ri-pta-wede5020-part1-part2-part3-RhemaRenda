/* Savanna Flame Kitchen - Part 3 JavaScript */

const products = [
  { id: 1, name: "Pap and beef stew", category: "Traditional", price: 75, image: "images/pap-beef-stew.jpg", description: "Pap served with beef stew, morogo and chakalaka." },
  { id: 2, name: "Chicken and pap", category: "Traditional", price: 65, image: "images/pap-beef-stew.jpg", description: "Grilled chicken served with pap and seasonal vegetables." },
  { id: 3, name: "Grilled chicken and chips", category: "Takeaway", price: 70, image: "images/grilled-chicken-chips.jpg", description: "Quarter chicken with slap chips, bread and chakalaka." },
  { id: 4, name: "Burger and chips", category: "Takeaway", price: 60, image: "images/grilled-chicken-chips.jpg", description: "Beef burger served with chips and sauce." },
  { id: 5, name: "Cold drink", category: "Drinks", price: 20, image: "images/venda-food-hero-640.jpg", description: "A chilled 440 ml soft drink." },
  { id: 6, name: "Tea or coffee", category: "Drinks", price: 18, image: "images/venda-food-hero-640.jpg", description: "Freshly prepared tea or coffee." }
];

function getCart() {
  return JSON.parse(localStorage.getItem("savannaCart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("savannaCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const total = getCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(".cart-count").forEach(item => item.textContent = total);
}

function addToCart(id) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({ id: id, quantity: 1 });
  saveCart(cart);
  const status = document.getElementById("menu-status");
  if (status) status.textContent = "Item added to your cart.";
}

function openLightbox(image, name) {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  lightbox.querySelector("img").src = image;
  lightbox.querySelector("img").alt = name;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }
}

function renderProducts() {
  const productList = document.getElementById("product-list");
  if (!productList) return;
  const search = document.getElementById("menu-search").value.toLowerCase();
  const category = document.getElementById("menu-category").value;
  const results = products.filter(product =>
    (product.name.toLowerCase().includes(search) || product.description.toLowerCase().includes(search)) &&
    (category === "All" || product.category === category)
  );

  productList.innerHTML = results.map(product => `
    <article class="card menu-item">
      <button class="image-button" type="button" data-image="${product.image}" data-name="${product.name}" aria-label="View larger image of ${product.name}">
        <img src="${product.image}" alt="${product.name} served at Savanna Flame Kitchen" width="1000" height="1000">
      </button>
      <p class="menu-category">${product.category}</p>
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p class="price">R${product.price.toFixed(2)}</p>
      <button type="button" data-add="${product.id}">Add to cart</button>
    </article>`).join("");

  if (!results.length) productList.innerHTML = "<p>No menu items match your search.</p>";
  productList.querySelectorAll("[data-add]").forEach(button => button.addEventListener("click", () => addToCart(Number(button.dataset.add))));
  productList.querySelectorAll("[data-image]").forEach(button => button.addEventListener("click", () => openLightbox(button.dataset.image, button.dataset.name)));
}

async function validateForm(form, type) {
  const status = form.querySelector(".form-status");
  const name = form.querySelector("[name='full-name']");
  const phone = form.querySelector("[type='tel']");
  const message = form.querySelector("textarea");
  if (name && name.value.trim().length < 2) {
    status.textContent = "Please enter your full name.";
    name.focus();
    return false;
  }
  if (phone && !/^0[6-8][0-9]{8}$/.test(phone.value.replace(/\s/g, ""))) {
    status.textContent = "Enter a valid South African number, for example 0712345678.";
    phone.focus();
    return false;
  }
  if (message && message.value.trim().length < 10) {
    status.textContent = "Please enter at least 10 characters in your message.";
    message.focus();
    return false;
  }
  status.textContent = "Sending...";
  if (type === "enquiry") {
    try {
      await fetch("https://formsubmit.co/ajax/info@savannaflamekitchen.co.za", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      });
      status.textContent = "Thank you. Your enquiry was processed and our team will respond soon.";
      form.reset();
    } catch (error) {
      status.textContent = "Your enquiry could not be sent. Please check your connection and try again.";
    }
  } else {
    const subject = encodeURIComponent(form.querySelector("[name='subject']").value);
    const messageText = encodeURIComponent(form.querySelector("[name='message']").value);
    status.textContent = "Your message is valid. Your email application will now open.";
    window.location.href = `mailto:info@savannaflamekitchen.co.za?subject=${subject}&body=${messageText}`;
  }
  return true;
}

function setupForms() {
  document.querySelectorAll("form[data-form-type]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (form.checkValidity()) validateForm(form, form.dataset.formType);
      else form.reportValidity();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  const search = document.getElementById("menu-search");
  const category = document.getElementById("menu-category");
  if (search && category) {
    search.addEventListener("input", renderProducts);
    category.addEventListener("change", renderProducts);
    renderProducts();
  }
  document.querySelectorAll("[data-close-lightbox]").forEach(button => button.addEventListener("click", closeLightbox));
  setupForms();
});

window.products = products;
window.getCart = getCart;
window.saveCart = saveCart;
