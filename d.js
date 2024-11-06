document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelectorAll(".cart-item");
    const totalPriceElement = document.getElementById("total-price");

    function updateTotalPrice() {
        let totalPrice = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector(".item-price").textContent.replace("$", ""));
            const quantity = parseInt(item.querySelector(".quantity-value").textContent);
            totalPrice += price * quantity;
        });
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    cartItems.forEach(item => {
        const quantityElement = item.querySelector(".quantity-value");
        const plusButton = item.querySelector(".plus-button");
        const minusButton = item.querySelector(".minus-button");
        const deleteButton = item.querySelector(".delete-button");
        const likeButton = item.querySelector(".like-button");

        plusButton.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = ++quantity;
            updateTotalPrice();
        });

        minusButton.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantityElement.textContent = --quantity;
                updateTotalPrice();
            }
        });

        deleteButton.addEventListener("click", () => {
            item.remove();
            updateTotalPrice();
        });

        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("liked");
        });
    });

    updateTotalPrice();
});
