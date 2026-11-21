/*
  G89 CLUB — PRODUCT DATA
  Ganti data contoh di bawah dengan produk asli kamu.

  image: nama file foto di folder assets/images/
  shopee: link produk Shopee (bukan hanya link toko, jika tersedia)
  price: harga yang ingin ditampilkan di website
*/
const products = [
  {
    name: "G89 Essential Tee",
    category: "APPAREL / T-SHIRT",
    price: "Rp  —",
    image: "", // contoh: "assets/images/essential-tee.jpg"
    shopee: "https://id.shp.ee/QWsVHVDM",
    tag: "FEATURED"
  },
  {
    name: "G89 Club Graphic Tee",
    category: "APPAREL / T-SHIRT",
    price: "Rp  —",
    image: "",
    shopee: "https://id.shp.ee/QWsVHVDM",
    tag: "NEW DROP"
  },
  {
    name: "G89 Streetwear",
    category: "APPAREL / COLLECTION",
    price: "Rp  —",
    image: "",
    shopee: "https://id.shp.ee/QWsVHVDM",
    tag: ""
  },
  {
    name: "G89 Daily Uniform",
    category: "APPAREL / COLLECTION",
    price: "Rp  —",
    image: "",
    shopee: "https://id.shp.ee/QWsVHVDM",
    tag: ""
  }
];

const productGrid = document.getElementById("productGrid");

productGrid.innerHTML = products.map((product) => {
  const imageContent = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
    : `<div class="product-placeholder">G89<small>PRODUCT IMAGE</small></div>`;

  return `
    <article class="product-card">
      <a class="product-image-wrap" href="${product.shopee}" target="_blank" rel="noopener noreferrer" aria-label="Lihat ${product.name} di Shopee">
        ${imageContent}
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
      </a>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <a class="product-buy" href="${product.shopee}" target="_blank" rel="noopener noreferrer">
          BELI SEKARANG <span>↗</span>
        </a>
      </div>
    </article>
  `;
}).join("");

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
// Active Navigation
const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {

    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });
});