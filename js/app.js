//global imports //
import "./toggleSidebar.js";
import "./cart/toggleCart.js";

// specific imports
// import { Products } from "./ClassProducts.js";

import { getElement } from "./utils.js";
import { display } from "./displayProducts.js";
import { fetchProducts } from "./fetchProducts.js";
import { setupStore, store } from "./store.js";

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // console.log(products);

    // add products to the store
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    display(featured, getElement(".featured-center"));
  }
};

window.addEventListener("DOMContentLoaded", init);
