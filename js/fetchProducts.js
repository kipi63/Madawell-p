export const fetchProducts = async () => {
  try {
    let result = await fetch("js/products.json");
    let products = await result.json();

    return products;
  } catch (error) {
    console.log(error);
  }
};
