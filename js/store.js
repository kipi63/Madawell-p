import { getStorageItem } from "./utils.js";
import { setStorageItem } from "./utils.js";
export let store = getStorageItem("store");
export const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { company, price, name, image, description, featured },
    } = product;

    return { id, company, price, name, image, description, featured };
  });
  setStorageItem("store", store);
};
// console.log(store);

export const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};
