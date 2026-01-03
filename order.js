let cart = {};
let total = 0;

function addItem(name, price) {
  if (!cart[name]) {
    cart[name] = { qty: 0, price };
  }
  cart[name].qty++;
  updateCart();
}

function removeItem(name) {
  if (cart[name]) {
    cart[name].qty--;
    if (cart[name].qty <= 0) delete cart[name];
  }
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  const totalEl = document.getElementById("total");

  cartList.innerHTML = "";
  total = 0;

  for (let item in cart) {
    const li = document.createElement("li");
    li.textContent = `${item} x${cart[item].qty}`;
    cartList.appendChild(li);
    total += cart[item].qty * cart[item].price;
  }

  totalEl.textContent = total.toLocaleString("id-ID");
}

function checkout() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;

  if (!name || !address || !phone || Object.keys(cart).length === 0) {
    alert("Lengkapi data dan pesanan!");
    return;
  }

  let receiptHTML = `
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Alamat:</strong> ${address}</p>
    <p><strong>No HP:</strong> ${phone}</p>
    <hr>
  `;

  for (let item in cart) {
    receiptHTML += `<p>${item} x${cart[item].qty}</p>`;
  }

  receiptHTML += `
    <hr>
    <p><strong>Total: Rp ${total.toLocaleString("id-ID")}</strong></p>
    <p>Terima kasih telah memesan di ARANYA ☕</p>
  `;

  document.getElementById("receipt-content").innerHTML = receiptHTML;
  document.getElementById("receipt").style.display = "block";
}
