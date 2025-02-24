document.addEventListener("DOMContentLoaded", function () {
    // Thumbnail Click Event
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.querySelector(".main-image");

    if (thumbnails && mainImage) {
        thumbnails.forEach((thumb) => {
            thumb.addEventListener("click", () => {
                mainImage.src = thumb.src;
            });
        });
    }

    // Quick View Popup
    const quickViewBtn = document.querySelector(".quick-view");
    const popup = document.querySelector(".quick-view-popup");
    const closePopup = document.querySelector(".close-popup");

    if (quickViewBtn && popup && closePopup) {
        quickViewBtn.addEventListener("click", () => {
            popup.style.display = "flex";
        });

        closePopup.addEventListener("click", () => {
            popup.style.display = "none";
        });

        // Close popup when clicking outside
        popup.addEventListener("click", (event) => {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        });
    }

    // Load Product Details from localStorage
    const productName = localStorage.getItem("productName");
    const productPrice = localStorage.getItem("productPrice");
    const productImage = localStorage.getItem("productImage");

    if (productName && productPrice && productImage) {
        document.getElementById("product-name").textContent = productName;
        document.getElementById("product-price").textContent = productPrice;
        document.getElementById("main-image").src = productImage;
    } else {
        document.querySelector("main").innerHTML = "<h2>Product not found.</h2>";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("product-list");

    // Retrieve stored products
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    if (storedProducts.length === 0) {
        productsContainer.innerHTML = "<p>No products selected.</p>";
        return;
    }

    storedProducts.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product-item");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
        `;
        productsContainer.appendChild(productElement);
    });
});
