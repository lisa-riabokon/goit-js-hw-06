// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputFontSizeSwitch = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

function onInputChangeSize(event) {
  spanTextEl.style.fontSize = `${event.currentTarget.value}px`;
}

inputFontSizeSwitch.addEventListener("input", onInputChangeSize);

console.log(inputFontSizeSwitch);
