document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");

    products.forEach((product) => {
        let hoverTimer;

        // Hover effect for description
        product.addEventListener("mouseenter", () => {
            hoverTimer = setTimeout(() => {
                product.querySelector(".description").style.opacity = "1";
                product.querySelector(".description").style.visibility = "visible";
            }, 3000);
        });

        product.addEventListener("mouseleave", () => {
            clearTimeout(hoverTimer);
            product.querySelector(".description").style.opacity = "0";
            product.querySelector(".description").style.visibility = "hidden";
        });

        // Click event to store product details
        product.addEventListener("click", () => {
            const productId = product.getAttribute("data-id");
            const productName = product.querySelector(".description").textContent.trim();
            const productPrice = product.querySelector(".price").textContent.trim();
            const productImage = product.querySelector("img").src;

            // Add a detailed description for each product
            const productDescriptions = {
                "1": "A stylish and comfortable men's shirt made from premium fabric, perfect for casual and formal wear.",
                "2": "A trendy women's dress designed with high-quality materials, offering both comfort and elegance.",
                "3": "Wireless earbuds with noise cancellation, deep bass, and long battery life for an immersive sound experience.",
                "4": "A modern smartwatch with a built-in fitness tracker, heart rate monitor, and sleep tracking features.",
                "5": "A sleek and durable leather wallet designed for men, featuring multiple card slots and a cash compartment.",
                "6": "A designer handbag crafted with premium materials, combining fashion with functionality.",
                "7": "An ergonomic wireless gaming mouse with customizable buttons, RGB lighting, and ultra-responsive tracking.",
                "8": "A compact and powerful Bluetooth speaker with high-quality sound, deep bass, and long battery life.",
                "9": "A 4K HD action camera with waterproof casing, image stabilization, and multiple recording modes."
            };

            const productDescription = productDescriptions[productId] || "No detailed description available.";

            // Store details in localStorage
            localStorage.setItem("productId", productId);
            localStorage.setItem("productName", productName);
            localStorage.setItem("productPrice", productPrice);
            localStorage.setItem("productImage", productImage);
            localStorage.setItem("productDescription", productDescription);

            // Redirect to product details page
            window.location.href = "product.html";
        });
    });
});
