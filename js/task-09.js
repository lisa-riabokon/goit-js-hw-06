// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 1.Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const body = document.querySelector("body");
const spanColorChangeEl = document.querySelector("span");
const buttonChangeColorEl = document.querySelector(".change-color");

function onChangeColorBtnClick() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  // видає згенерований колір як на body, але в форматі rgb
  // spanColorChangeEl.textContent = body.style.backgroundColor;

  // видає згенерований колір в форматі hex, а на body в форматі rgb і я не впевнена , чи збігаються вони
  spanColorChangeEl.textContent = randomColor;
}

buttonChangeColorEl.addEventListener("click", onChangeColorBtnClick);
