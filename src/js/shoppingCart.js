import { addClass, removeClass } from "./utils-class";

// Grab the shoppingCart element
const shoppingCart = document.getElementById("shopping-cart");

// Set cart array with cart's id
const cartArr = ["1", "2", "3"];

localStorage.setItem("cartData", JSON.stringify(cartArr));

if (shoppingCart) {
  // Grab the cart icon at the header
  const cartHeader = document.getElementById("header-cart");
  // Grab all delete button
  const removeBtns = shoppingCart.querySelectorAll("button[data-delete-item ]");

  // When the button is clicked
  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener("click", function (e) {
      const id = e.target.attributes["data-delete-item"].value;
      console.log(id);

      // Remove all data inside an element that has same data-id value with the data-delete-item's value from removeBtn
      shoppingCart.querySelector(`div[data-row='${id}']`).remove();

      // Get the cartArr data from localStorage
      const CART =
        localStorage.getItem("cartData") &&
        JSON.parse(localStorage.getItem("cartData"));
      console.log(CART);

      const found = CART.indexOf(id);
      console.log(`id: ${id}`);
      console.log(`found: ${found}`);

      if (found > -1) {
        CART.splice(found, 1);
        localStorage.setItem("cartData", JSON.stringify(CART));
      }

      // If the CART is empty / The shopping cart items is empty
      if (CART.length === 0) {
        removeClass(cartHeader, "cart-filled");
        removeClass(document.getElementById("cart-empty"), "hidden");
      }
    });
  });
}
