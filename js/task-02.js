const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainerEl = document.querySelector("#ingredients");

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement()
ingredients.forEach((ingredientItem) => {
  const ingredientEl = document.createElement("li");
  // Додасть назву інгредієнта як його текстовий вміст
  ingredientEl.textContent = ingredientItem;
  // Додасть елементу клас item
  ingredientEl.classList.add("item");
  // Після чого, вставить усі <li> за одну операцію у список ul#ingredients
  ingredientsContainerEl.append(ingredientEl);
});
