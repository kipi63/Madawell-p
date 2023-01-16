import { getElement } from "../utils.js";
import { display } from "../displayProducts.js";
import { store } from "../store.js";
export const setupSearch = () => {
  const form = getElement(".input-form");
  const nameInput = getElement(".search-input");
  let productContainer = getElement(".products-container");

  form.addEventListener("keyup", () => {
    const value = nameInput.value;
    if (value) {
      const newStore = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return product;
        }
      });
      display(newStore, productContainer, true);
      if (newStore.length < 1) {
        const products = getElement(".products-container");
        products.innerHTML = `<h3 class="filter-error">
				sorry, no products matched your search
				</h3>`;
      }
    } else {
      display(store, productContainer, true);
    }
  });
};
