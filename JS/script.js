document.addEventListener('scroll', () => { 
  const scroll = document.documentElement.scrollTop;
  if (scroll >= 100) {
    document.body.classList.add('scroll');
  } else {
    document.body.classList.remove('scroll');
  }
});
// Tea search filter (Featured Teas)
const searchInput = document.getElementById("tea-search");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.toLowerCase();

    products.forEach((product) => {
    const name = (product.dataset.name || "").toLowerCase();
    product.style.display = name.includes(keyword) ? "" : "none";
  });
});







