import { getElement } from "../utils.js";
import { display } from "../displayProducts.js";

export const setupCompanies = (store) => {
  let companies = ["all", ...new Set(store.map((product) => product.company))];
  console.log(companies);
  let productContainer = getElement(".products-container");

  const companiesContainer = getElement(".companies");
  companiesContainer.innerHTML = companies
    .map((company) => {
      return ` <button class="company-btn type-btn">${company}</button>`;
    })
    .join("");
  companiesContainer.addEventListener("click", (e) => {
    let element = e.target;
    // console.log(element);
    if (element.classList.contains("company-btn")) {
      let newStore = [];
      if (element.textContent === "all") {
        newStore = [...store];
      } else {
        newStore = store.filter(
          (product) => product.company === element.textContent
        );
      }
      display(newStore, productContainer, true);
    }
  });
};
