
var products = [
  // perfumes
  { id: 1,  name: "Japanese Cherry Blossom Mist", category: "perfume", price: 499, desc: "Juicy cherry blossom, white musk and soft almond.", image: "images/1.jpg" },
  { id: 2,  name: "A Thousand Wishes Mist", category: "perfume", price: 499, desc: "Sparkling berries, champagne and creamy vanilla.", image: "images/2.jpg" },
  { id: 3,  name: "Warm Vanilla Sugar Mist", category: "perfume", price: 449, desc: "Sweet vanilla with a hint of musk.", badge: "Classic", image: "images/3.jpg" },
  { id: 4,  name: "Into the Night Mist", category: "perfume", price: 499, desc: "Midnight jasmine, plum and amber.", image: "images/4.jpg" },
  { id: 5,  name: "Gingham Gorgeous Mist", category: "perfume", price: 449, desc: "Fresh peony, pink pear and soft white woods.", image: "images/5.jpg" },
  { id: 6,  name: "Sweet Pea Mist", category: "perfume", price: 499, desc: "Sparkling freesia, sweet pea and pink cotton.", image: "images/6.jpg" },
  { id: 6,  name: "Gingham Blue", category: "perfume", price: 499, desc: "Fresh citrus, soft florals and clean musk.",badge: "Best seller", image: "images/28.jpg" },
  // scented candles
  { id: 7,  name: "Mahogany Teakwood 3-Wick Candle", category: "candle", price: 899, desc: "Rich mahogany, teakwood and a touch of spice.", badge: "Best seller", image: "images/7.jpg" },
  { id: 8,  name: "Warm Vanilla Sugar 3-Wick Candle", category: "candle", price: 899, desc: "Warm, creamy vanilla that fills the whole room.", image: "images/8.jpg" },
  { id: 9,  name: "Champagne Toast 3-Wick Candle", category: "candle", price: 899, desc: "Crisp apple, peach and a sparkling finish.", image: "images/9.jpg" },
  { id: 10, name: "Pumpkin Pecan Waffles 3-Wick Candle", category: "candle", price: 899, desc: "Cozy breakfast vibes: pumpkin, pecan and maple.", badge: "Seasonal", image: "images/10.jpg" },
  { id: 11, name: "Sweater Weather Single-Wick Candle", category: "candle", price: 899, desc: "Cashmere, cedar and a hint of spice.", image: "images/11.jpg" },
  { id: 12, name: "Eucalyptus Spearmint Single-Wick Candle", category: "candle", price: 899, desc: "Fresh and calming, perfect for the bathroom.", image: "images/12.jpg" },

  // sanitizers
  { id: 13, name: "Cucumber Melon PocketBac Sanitizer", category: "sanitizer", price: 99, desc: "Pocket-size gel in a fresh, juicy scent.", image: "images/13.jpg" },
  { id: 14, name: "Warm Vanilla Sugar Sanitizer", category: "sanitizer", price: 99, desc: "Sweet vanilla clean on the go.", badge: "Best seller", image: "images/14.jpg" },
  { id: 15, name: "Japanese Cherry Blossom Sanitizer", category: "sanitizer", price: 99, desc: "Cherry blossom freshness for your bag.", image: "images/15.jpg" },
  { id: 16, name: "Sweet Pea Sanitizer", category: "sanitizer", price: 99, desc: "Light, floral and feel-good.", image: "images/16.jpg" },
  { id: 17, name: "PocketBac Sanitizer 5-Pack Bundle", category: "sanitizer", price: 449, desc: "Mix of 5 popular scents. Great for gifting.", badge: "Value", image: "images/17.jpg" },

  // shampoo and body wash
  { id: 18, name: "Lavender Vanilla Aromatherapy Shampoo", category: "shampoo", price: 599, desc: "Calming lavender and vanilla for a relaxing wash.", image: "images/18.jpg" },
  { id: 19, name: "Coconut Moisture Shampoo", category: "shampoo", price: 599, desc: "Soft, shiny hair with a tropical coconut scent.", image: "images/19.jpg" },
  { id: 20, name: "Warm Vanilla Sugar Shower Gel", category: "shampoo", price: 499, desc: "Creamy foaming body wash with sweet vanilla.", badge: "Best seller", image: "images/20.jpg" },
  { id: 21, name: "Japanese Cherry Blossom Shower Gel", category: "shampoo", price: 499, desc: "Cherry blossom bubbles for a fresh shower.", image: "images/21.jpg" },
  { id: 22, name: "Gingham Gorgeous Shower Gel", category: "shampoo", price: 499, desc: "Peony and pink pear body wash.", badge: "New", image: "images/22.jpg" },

  // lotions
  { id: 23, name: "Japanese Cherry Blossom Body Lotion", category: "lotion", price: 499, desc: "Silky lotion that keeps skin soft all day.", badge: "Best seller", image: "images/23.jpg" },
  { id: 24, name: "Warm Vanilla Sugar Body Lotion", category: "lotion", price: 499, desc: "Smooth, creamy and smells so good.", image: "images/24.jpg" },
  { id: 25, name: "A Thousand Wishes Body Lotion", category: "lotion", price: 499, desc: "Berries and champagne with shea butter.", image: "images/25.jpg" },
  { id: 26, name: "Into the Night Body Cream", category: "lotion", price: 449, desc: "Rich cream with jasmine and amber.", image: "images/26.jpg" },
  { id: 27, name: "Sweet Pea Body Lotion", category: "lotion", price: 499, desc: "Light floral lotion for everyday use.", image: "images/27.jpg" }
];

var icons = { perfume: "🌸", candle: "🕯️", sanitizer: "🧼", shampoo: "🚿", lotion: "🧴" };
var categoryNames = {
  perfume: "Perfume",
  candle: "Scented Candle",
  sanitizer: "Sanitizer",
  shampoo: "Shampoo & Body Wash",
  lotion: "Body Lotion"
};

var shippingFee = 80;
var freeShippingOver = 1500;


// ---------- little helper functions ----------
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function peso(n) {
  return "₱" + Number(n).toLocaleString("en-PH");
}

// stops weird characters from breaking the page
function esc(text) {
  var div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function getData(key, defaultValue) {
  try {
    var saved = localStorage.getItem(key);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    // localStorage not working, just use default
  }
  return defaultValue;
}

function setData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log("cannot save", e);
  }
}

var toastTimer;
function showToast(message) {
  var t = $("#toast");
  t.textContent = message;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    t.classList.remove("show");
  }, 2500);
}


// ---------- LOGIN / SIGN UP ----------
// (this is just a school project demo, a real website
// would need a server and real password security)

var afterLogin = null; // what to do after the user logs in

// turns the password into scrambled text so it's not saved plainly
function scramble(password) {
  var hash = 0;
  var text = "inara" + password;
  for (var i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) % 1000000007;
  }
  return "h" + hash;
}

function getUsers() {
  return getData("inara_users", []);
}

function getLoggedInEmail() {
  return getData("inara_session", null);
}

function getCurrentUser() {
  var email = getLoggedInEmail();
  var users = getUsers();
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return users[i];
    }
  }
  return null;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// show the right buttons in the header depending if logged in or not
function updateAccountButtons() {
  var user = getCurrentUser();

  if (user) {
    $("#loginBtn").classList.add("hidden");
    $("#userMenu").classList.remove("hidden");
    $("#userName").textContent = user.name.split(" ")[0];
  } else {
    $("#loginBtn").classList.remove("hidden");
    $("#userMenu").classList.add("hidden");
  }
  $("#userDropdown").classList.add("hidden");

  cart = loadCart();
  updateCart();
}

function openModal(id) {
  $(id).classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  $(id).classList.add("hidden");
  document.body.style.overflow = "";
}

function closeAllModals() {
  var modals = $$(".modal");
  for (var i = 0; i < modals.length; i++) {
    modals[i].classList.add("hidden");
  }
  document.body.style.overflow = "";
}

function openAuth(mode, hint) {
  switchAuthTab(mode);
  var hintBox = $("#authHint");
  if (hint) {
    hintBox.textContent = hint;
    hintBox.classList.remove("hidden");
  } else {
    hintBox.classList.add("hidden");
  }
  $("#loginError").textContent = "";
  $("#signupError").textContent = "";
  openModal("#authModal");
}

function switchAuthTab(mode) {
  var tabs = $$(".auth-tab");
  for (var i = 0; i < tabs.length; i++) {
    if (tabs[i].dataset.mode === mode) {
      tabs[i].classList.add("active");
    } else {
      tabs[i].classList.remove("active");
    }
  }

  if (mode === "login") {
    $("#loginForm").classList.remove("hidden");
    $("#signupForm").classList.add("hidden");
    $("#authTitle").textContent = "Welcome back";
  } else {
    $("#loginForm").classList.add("hidden");
    $("#signupForm").classList.remove("hidden");
    $("#authTitle").textContent = "Join Inara Scents";
  }
}

function signUp(event) {
  event.preventDefault();

  var name = $("#signupName").value.trim();
  var email = $("#signupEmail").value.trim().toLowerCase();
  var password = $("#signupPassword").value;
  var confirm = $("#signupConfirm").value;
  var error = $("#signupError");

  // checking the inputs
  if (name.length < 2) {
    error.textContent = "Please enter your full name.";
    return;
  }
  if (!isValidEmail(email)) {
    error.textContent = "Please enter a valid email address.";
    return;
  }
  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return;
  }
  if (password !== confirm) {
    error.textContent = "Passwords do not match.";
    return;
  }

  var users = getUsers();
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      error.textContent = "That email already has an account. Try logging in.";
      return;
    }
  }

  users.push({ name: name, email: email, password: scramble(password) });
  setData("inara_users", users);
  setData("inara_session", email);
  $("#signupForm").reset();

  afterLoginSuccess("Account created! Welcome, " + name.split(" ")[0] + "!");
}

function logIn(event) {
  event.preventDefault();

  var email = $("#loginEmail").value.trim().toLowerCase();
  var password = $("#loginPassword").value;
  var users = getUsers();
  var found = null;

  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === scramble(password)) {
      found = users[i];
    }
  }

  if (!found) {
    $("#loginError").textContent = "Wrong email or password.";
    return;
  }

  setData("inara_session", email);
  $("#loginForm").reset();
  afterLoginSuccess("Welcome back, " + found.name.split(" ")[0] + "!");
}

function afterLoginSuccess(message) {
  closeModal("#authModal");
  updateAccountButtons();
  showToast(message);

  // if they clicked "add to cart" before logging in, do it now
  if (afterLogin) {
    var action = afterLogin;
    afterLogin = null;
    action();
  }
}

function logOut() {
  localStorage.removeItem("inara_session");
  closeCart();
  updateAccountButtons();
  showToast("You have been logged out.");
}


// ---------- SHOP (filter, search, sort) ----------
var currentCategory = "all";
var currentSort = "featured";
var searchText = "";

function getProductsToShow() {
  var list = [];
  var search = searchText.trim().toLowerCase();

  for (var i = 0; i < products.length; i++) {
    var p = products[i];

    // category filter
    if (currentCategory !== "all" && p.category !== currentCategory) {
      continue;
    }
    // search filter
    var words = (p.name + " " + p.desc + " " + categoryNames[p.category]).toLowerCase();
    if (search !== "" && words.indexOf(search) === -1) {
      continue;
    }
    list.push(p);
  }

  // sorting
  if (currentSort === "price-asc") {
    list.sort(function (a, b) { return a.price - b.price; });
  } else if (currentSort === "price-desc") {
    list.sort(function (a, b) { return b.price - a.price; });
  } else if (currentSort === "name-asc") {
    list.sort(function (a, b) { return a.name.localeCompare(b.name); });
  } else if (currentSort === "name-desc") {
    list.sort(function (a, b) { return b.name.localeCompare(a.name); });
  }

  return list;
}

// the picture box: shows emoji, and the photo on top if it exists
// (if the photo file is missing, onerror removes it so the emoji stays)
function pictureHTML(p) {
  var html = '<span aria-hidden="true">' + icons[p.category] + "</span>";
  if (p.image) {
    html += '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" onerror="this.remove()">';
  }
  return html;
}

function showProducts() {
  var list = getProductsToShow();
  var html = "";

  for (var i = 0; i < list.length; i++) {
    var p = list[i];
    html += '<article class="product" data-id="' + p.id + '">';
    html += '  <div class="pimg ' + p.category + '">';
    if (p.badge) {
      html += '<span class="badge">' + esc(p.badge) + "</span>";
    }
    html += pictureHTML(p);
    html += "  </div>";
    html += '  <div class="pbody">';
    html += '    <span class="pcat">' + categoryNames[p.category] + "</span>";
    html += '    <h3 class="pname">' + esc(p.name) + "</h3>";
    html += '    <p class="pdesc">' + esc(p.desc) + "</p>";
    html += '    <div class="pfoot">';
    html += '      <span class="price">' + peso(p.price) + "</span>";
    html += '      <button class="btn btn-small" data-add="' + p.id + '">Add to cart</button>';
    html += "    </div>";
    html += "  </div>";
    html += "</article>";
  }

  $("#productGrid").innerHTML = html;

  if (list.length === 0) {
    $("#emptyMsg").classList.remove("hidden");
    $("#resultCount").textContent = "";
  } else {
    $("#emptyMsg").classList.add("hidden");
    $("#resultCount").textContent = "Showing " + list.length + " product" + (list.length > 1 ? "s" : "");
  }
}


// ---------- PRODUCT ZOOM POPUP ----------
var zoomedProductId = null;

function openProductZoom(id) {
  var p = findProduct(id);
  if (!p) return;
  zoomedProductId = p.id;

  var pic = $("#zoomPic");
  pic.className = "zoom-pic pimg " + p.category;
  pic.innerHTML = pictureHTML(p);

  $("#zoomCat").textContent = categoryNames[p.category];
  $("#zoomName").textContent = p.name;
  $("#zoomDesc").textContent = p.desc;
  $("#zoomPrice").textContent = peso(p.price);
  openModal("#productModal");
}


// ---------- CART ----------
// cart looks like this: { 1: 2, 7: 1 }  (product id : quantity)
var cart = {};

function loadCart() {
  var email = getLoggedInEmail();
  if (email) {
    return getData("inara_cart_" + email, {});
  }
  return {};
}

function saveCart() {
  var email = getLoggedInEmail();
  if (email) {
    setData("inara_cart_" + email, cart);
  }
}

function findProduct(id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === Number(id)) {
      return products[i];
    }
  }
  return null;
}

function addToCart(id) {
  // must be logged in first
  if (!getCurrentUser()) {
    afterLogin = function () { addToCart(id); };
    openAuth("login", "Please log in or create an account to add items to your cart.");
    return;
  }

  if (cart[id]) {
    cart[id] = cart[id] + 1;
  } else {
    cart[id] = 1;
  }
  saveCart();
  updateCart();
  showToast('Added "' + findProduct(id).name + '" to your cart');
}

function changeQty(id, amount) {
  cart[id] = (cart[id] || 0) + amount;
  if (cart[id] <= 0) {
    delete cart[id];
  }
  saveCart();
  updateCart();
}

function removeFromCart(id) {
  delete cart[id];
  saveCart();
  updateCart();
}

function getSubtotal() {
  var total = 0;
  for (var id in cart) {
    var p = findProduct(id);
    if (p) {
      total += p.price * cart[id];
    }
  }
  return total;
}

function getShipping(subtotal) {
  if (subtotal === 0 || subtotal >= freeShippingOver) {
    return 0;
  }
  return shippingFee;
}

function updateCart() {
  var html = "";
  var count = 0;

  for (var id in cart) {
    var p = findProduct(id);
    if (!p) continue;
    count += cart[id];

    html += '<div class="cart-item">';
    html += '  <div class="cart-thumb pimg ' + p.category + '" style="height:56px;font-size:1.8rem">' + pictureHTML(p) + "</div>";
    html += '  <div class="cart-info">';
    html += "    <strong>" + esc(p.name) + "</strong>";
    html += "    <span>" + peso(p.price) + "</span>";
    html += '    <div class="qty">';
    html += '      <button data-dec="' + p.id + '" aria-label="Decrease quantity">−</button>';
    html += "      <span>" + cart[id] + "</span>";
    html += '      <button data-inc="' + p.id + '" aria-label="Increase quantity">+</button>';
    html += "    </div>";
    html += "  </div>";
    html += '  <button class="remove" data-remove="' + p.id + '">Remove</button>';
    html += "</div>";
  }

  if (count === 0) {
    html = '<div class="cart-empty"><p style="font-size:2.5rem">🛍️</p><p>Your cart is empty.</p><p>Add a scent you love!</p></div>';
  }

  $("#cartItems").innerHTML = html;
  $("#cartCount").textContent = count;

  var subtotal = getSubtotal();
  var shipping = getShipping(subtotal);
  $("#subtotal").textContent = peso(subtotal);
  $("#shipping").textContent = (subtotal > 0 && shipping === 0) ? "FREE" : peso(shipping);
  $("#grandTotal").textContent = peso(subtotal + shipping);

  // disable checkout button if cart is empty
  $("#checkoutBtn").disabled = (count === 0);
  $("#checkoutBtn").style.opacity = (count === 0) ? 0.5 : 1;

  var note = $("#shipNote");
  if (count === 0) {
    note.textContent = "";
  } else if (subtotal >= freeShippingOver) {
    note.textContent = "🎉 You got free shipping!";
  } else {
    note.textContent = "Add " + peso(freeShippingOver - subtotal) + " more for free shipping.";
  }
}

function openCart() {
  if (!getCurrentUser()) {
    afterLogin = openCart;
    openAuth("login", "Please log in to see your cart.");
    return;
  }
  $("#cartDrawer").classList.add("open");
  $("#cartOverlay").classList.remove("hidden");
}

function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#cartOverlay").classList.add("hidden");
}


// ---------- CHECKOUT ----------
function openCheckout() {
  var subtotal = getSubtotal();
  if (subtotal === 0) {
    showToast("Your cart is empty.");
    return;
  }

  var user = getCurrentUser();
  if ($("#coName").value === "") {
    $("#coName").value = user.name;
  }
  $("#checkoutError").textContent = "";
  $("#checkoutView").classList.remove("hidden");
  $("#successView").classList.add("hidden");

  // order summary on the right side
  var html = "";
  for (var id in cart) {
    var p = findProduct(id);
    if (p) {
      html += '<div class="sum-row"><span>' + cart[id] + " × " + esc(p.name) + "</span><span>" + peso(p.price * cart[id]) + "</span></div>";
    }
  }
  $("#summaryItems").innerHTML = html;

  var shipping = getShipping(subtotal);
  $("#sumSubtotal").textContent = peso(subtotal);
  $("#sumShipping").textContent = shipping === 0 ? "FREE" : peso(shipping);
  $("#sumTotal").textContent = peso(subtotal + shipping);

  closeCart();
  openModal("#checkoutModal");
}

function placeOrder(event) {
  event.preventDefault();

  var name = $("#coName").value.trim();
  var phone = $("#coPhone").value.trim();
  var address = $("#coAddress").value.trim();
  var notes = $("#coNotes").value.trim();
  var payment = $("input[name='payment']:checked").value;
  var error = $("#checkoutError");

  if (name.length < 2) {
    error.textContent = "Please enter your name.";
    return;
  }
  if (!/^[0-9+\s-]{7,15}$/.test(phone)) {
    error.textContent = "Please enter a valid mobile number.";
    return;
  }
  if (address.length < 10) {
    error.textContent = "Please enter your complete delivery address.";
    return;
  }

  var subtotal = getSubtotal();
  if (subtotal === 0) {
    error.textContent = "Your cart is empty.";
    return;
  }
  var shipping = getShipping(subtotal);

  // make the list of items for the order
  var items = [];
  for (var id in cart) {
    var p = findProduct(id);
    if (p) {
      items.push({ name: p.name, price: p.price, qty: cart[id] });
    }
  }

  var order = {
    id: "INR-" + String(Date.now()).slice(-7),
    date: new Date().toLocaleString("en-PH"),
    items: items,
    shipping: shipping,
    total: subtotal + shipping,
    payment: payment,
    name: name,
    phone: phone,
    address: address,
    notes: notes,
    status: "Pending"
  };

  // save the order (newest first)
  var email = getLoggedInEmail();
  var orders = getData("inara_orders_" + email, []);
  orders.unshift(order);
  setData("inara_orders_" + email, orders);

  // empty the cart
  cart = {};
  saveCart();
  updateCart();
  $("#checkoutForm").reset();

  // show thank you message
  $("#successId").textContent = order.id;
  $("#checkoutView").classList.add("hidden");
  $("#successView").classList.remove("hidden");
}

function showOrders() {
  var orders = getData("inara_orders_" + getLoggedInEmail(), []);
  var html = "";

  if (orders.length === 0) {
    html = '<p class="muted" style="margin-top:12px">You have no orders yet.</p>';
  }

  for (var i = 0; i < orders.length; i++) {
    var o = orders[i];
    html += '<div class="order">';
    html += '  <div class="order-head">';
    html += "    <span><strong>" + esc(o.id) + "</strong> • " + esc(o.date) + "</span>";
    html += '    <span class="status">' + esc(o.status) + "</span>";
    html += "  </div>";
    html += "  <ul>";
    for (var j = 0; j < o.items.length; j++) {
      var item = o.items[j];
      html += "<li><span>" + item.qty + " × " + esc(item.name) + "</span><span>" + peso(item.price * item.qty) + "</span></li>";
    }
    html += "  </ul>";
    html += '  <p class="muted" style="margin-top:8px">Payment: ' + esc(o.payment) + " • Shipping: " + (o.shipping ? peso(o.shipping) : "FREE") + "</p>";
    html += '  <p class="order-total">Total: ' + peso(o.total) + "</p>";
    html += "</div>";
  }

  $("#ordersList").innerHTML = html;
  $("#userDropdown").classList.add("hidden");
  openModal("#ordersModal");
}


// ---------- EVENTS (clicks, typing, etc.) ----------
function setupEvents() {
  // category tabs
  $("#categoryTabs").addEventListener("click", function (e) {
    var tab = e.target.closest(".tab");
    if (!tab) return;

    var allTabs = $$(".tab");
    for (var i = 0; i < allTabs.length; i++) {
      allTabs[i].classList.remove("active");
    }
    tab.classList.add("active");
    currentCategory = tab.dataset.cat;
    showProducts();
  });

  // sort + search
  $("#sortSelect").addEventListener("change", function (e) {
    currentSort = e.target.value;
    showProducts();
  });
  $("#searchInput").addEventListener("input", function (e) {
    searchText = e.target.value;
    showProducts();
  });

  // add to cart buttons
  $("#productGrid").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-add]");
    if (btn) {
      addToCart(Number(btn.dataset.add));
      return;
    }
    // clicked somewhere else on the product -> zoom in
    var card = e.target.closest(".product");
    if (card) {
      openProductZoom(Number(card.dataset.id));
    }
  });

  // add to cart button inside the zoom popup
  $("#zoomAddBtn").addEventListener("click", function () {
    closeModal("#productModal");
    addToCart(zoomedProductId);
  });

  // cart
  $("#cartBtn").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  $("#cartOverlay").addEventListener("click", closeCart);
  $("#cartItems").addEventListener("click", function (e) {
    var plus = e.target.closest("[data-inc]");
    var minus = e.target.closest("[data-dec]");
    var remove = e.target.closest("[data-remove]");
    if (plus) changeQty(Number(plus.dataset.inc), 1);
    if (minus) changeQty(Number(minus.dataset.dec), -1);
    if (remove) removeFromCart(Number(remove.dataset.remove));
  });
  $("#checkoutBtn").addEventListener("click", openCheckout);

  // checkout
  $("#checkoutForm").addEventListener("submit", placeOrder);
  $("#successDone").addEventListener("click", function () {
    closeAllModals();
    document.getElementById("shop").scrollIntoView();
  });

  // login / sign up
  $("#loginBtn").addEventListener("click", function () {
    afterLogin = null;
    openAuth("login", "");
  });
  var authTabs = $$(".auth-tab");
  for (var i = 0; i < authTabs.length; i++) {
    authTabs[i].addEventListener("click", function () {
      switchAuthTab(this.dataset.mode);
    });
  }
  $("#loginForm").addEventListener("submit", logIn);
  $("#signupForm").addEventListener("submit", signUp);
  $("#logoutBtn").addEventListener("click", logOut);
  $("#ordersBtn").addEventListener("click", showOrders);
  $("#userBtn").addEventListener("click", function (e) {
    e.stopPropagation();
    $("#userDropdown").classList.toggle("hidden");
  });
  document.addEventListener("click", function () {
    $("#userDropdown").classList.add("hidden");
  });

  // close popups (X button, clicking outside, or pressing Esc)
  var modals = $$(".modal");
  for (var m = 0; m < modals.length; m++) {
    modals[m].addEventListener("click", function (e) {
      if (e.target === this || e.target.closest("[data-close]")) {
        closeModal("#" + this.id);
      }
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllModals();
      closeCart();
    }
  });

  // mobile menu
  $("#menuToggle").addEventListener("click", function () {
    $("#navLinks").classList.toggle("open");
  });
  var navLinks = $$("#navLinks a");
  for (var n = 0; n < navLinks.length; n++) {
    navLinks[n].addEventListener("click", function () {
      $("#navLinks").classList.remove("open");
    });
  }

  // contact form (it doesn't really send, just for the demo)
  $("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var note = $("#contactNote");
    var okName = $("#contactName").value.trim() !== "";
    var okEmail = isValidEmail($("#contactEmail").value.trim());
    var okMsg = $("#contactMsg").value.trim() !== "";

    if (!okName || !okEmail || !okMsg) {
      note.style.color = "#c0182f";
      note.textContent = "Please fill in all fields with a valid email.";
      return;
    }
    note.style.color = "";
    note.textContent = "Thank you! We will get back to you soon.";
    e.target.reset();
  });
}


// ---------- START ----------
document.addEventListener("DOMContentLoaded", function () {
  $("#year").textContent = new Date().getFullYear();
  setupEvents();
  showProducts();
  updateAccountButtons();
});
