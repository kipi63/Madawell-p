import { getElement } from "../utils.js";
import { display } from "../displayProducts.js";

export const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");
  const productsConatiner = getElement(".products-container");

  // setup filter

  let maxPrice = store.map((product) => product.price);
  // console.log(maxPrice);
  maxPrice = Math.max(...maxPrice);
  // console.log(maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value : $ ${maxPrice}`;

  priceInput.addEventListener("input", () => {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : $ ${value}`;

    let newStore = store.filter((product) => product.price / 100 <= value);
    display(newStore, productsConatiner, true);
    if (newStore.length < 1) {
      productsConatiner.innerHTML = `<h3 class="filter-error">Sorry , No product matched you search</h3>`;
    }

    // console.log(typeof value);
  });
};
