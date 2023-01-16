export const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

export const formatPrice = (price) => {
  let formatedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return formatedPrice;
};

export const getStorageItem = (key) => {
  const storageItem = JSON.parse(localStorage.getItem(key)) ?? [];

  // if (storageItem) {
  //   storageItem = JSON.parse(localStorage.getItem(key));
  // } else {
  //   storageItem = [];
  // }
  // storageItem ? (storageItem = JSON.parse(localStorage.getItem(key))) : [];

  return storageItem;
};

export const setStorageItem = (name, key) => {
  localStorage.setItem(name, JSON.stringify(key));
};
