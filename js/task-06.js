// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

let inputEl = document.querySelector("#validation-input");

function onInputBlur() {
  inputEl.classList = [];
  if (inputEl.value.length === 6) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}

inputEl.addEventListener("blur", onInputBlur);
