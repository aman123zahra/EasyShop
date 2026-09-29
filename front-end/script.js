// ===============================
// EasyShop JavaScript
// ===============================

// 1. SEARCH PRODUCTS
const searchInput = document.querySelector("#searchInput");
const products = document.querySelectorAll(".product-card");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        products.forEach(function (product) {
            const productName = product
                .querySelector("h3")
                .textContent
                .toLowerCase();

            if (productName.includes(searchText)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}


// 2. ADD TO CART
let cart = [];

const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const product = button.closest(".product-card");

        const productName = product.querySelector("h3").textContent;
        const productPrice = product.querySelector(".price").textContent;

        cart.push({
            name: productName,
            price: productPrice
        });

        alert(productName + " added to cart 🛒");

        updateCartCount();
    });
});


// 3. UPDATE CART COUNT
function updateCartCount() {
    const cartCount = document.querySelector("#cartCount");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}


// 4. WISHLIST
const wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (button.classList.contains("liked")) {
            button.classList.remove("liked");
            button.textContent = "♡";
        } else {
            button.classList.add("liked");
            button.textContent = "♥";
        }

    });

});