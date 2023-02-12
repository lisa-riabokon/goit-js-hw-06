function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// 1. Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
//2.  Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// 3. Розміри найпершого <div> - 30px на 30px.
// 4. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 5. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

const inputNumberEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");

createBtn.style.backgroundColor = "green";
destroyBtn.style.backgroundColor = "red";

function createBoxes(amount) {
  amount = inputNumberEl.value;
  const divListEl = [];

  for (let i = 0; i < amount; i += 1) {
    const addDivEl = document.createElement("div");
    addDivEl.style.width = `${30 + i * 10}px`;
    addDivEl.style.height = `${30 + i * 10}px`;
    addDivEl.style.background = getRandomHexColor();
    addDivEl.style.margin = "0 auto 10px";
    divListEl.push(addDivEl);
  }

  divBoxesEl.append(...divListEl);
}

function onDestroyBtnClick(event) {
  divBoxesEl.innerHTML = "";
  inputNumberEl.value = 0;
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", onDestroyBtnClick);
