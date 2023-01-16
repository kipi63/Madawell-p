//global imports //
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
//filter  imports
import { setupSearch } from "../filters/search.js";
import { setupCompanies } from "../filters/setupCompaniesFile.js";
import { setupPrice } from "../filters/setupPriceFile.js";

//specific imports
import { store, setupStore } from "../store.js";
import { display } from "../displayProducts.js";
import { getElement } from "../utils.js";
import { fetchProducts } from "../fetchProducts.js";

const init = async () => {
  const loading = getElement(".page-loading");

  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }
  console.log(store);
  display(store, getElement(".products-container"));
  setupSearch(store);
  setupCompanies(store);
  setupPrice(store);

  loading.style.display = "none";
};
init();
