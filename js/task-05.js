// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// Об'єкт посилань
const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
  header: document.querySelector("h1"),
};

function onInputChange() {
  if (refs.input.value === "") {
    refs.nameLabel.textContent = "Anonymous";
  } else {
    refs.nameLabel.textContent = refs.input.value;
  }
}

refs.input.addEventListener("input", onInputChange);
