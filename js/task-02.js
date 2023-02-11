const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const addMarkupItem = ingredients.map((element) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = element;
  return itemEl;
});

const linkListIngredients = document.querySelector("#ingredients");
linkListIngredients.append(...addMarkupItem);
