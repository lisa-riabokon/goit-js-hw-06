//1.Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.

let counterValue = 0;

const value = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

// 2.Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3.Оновлюй інтерфейс новим значенням змінної counterValue.
decrementBtn.addEventListener("click", (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
});
incrementBtn.addEventListener("click", (event) => {
  counterValue += 1;
  value.textContent = counterValue;
});

// ------ Варіант 2 Якщо виносити функцію окремо і передавати на неї колбек--

// function onDecrementButtonClick() {
//   counterValue -= 1;
//   value.textContent = counterValue;
// }

// function onIncrementButtonClick() {
//   counterValue += 1;
//   value.textContent = counterValue;
// }

// decrementBtn.addEventListener("click", onDecrementButtonClick);
// incrementBtn.addEventListener("click", onIncrementButtonClick);

// ------ВАРІАНТ 1 За відео-уроком Репети -----------
// const counter = {
//   value: 0,
//   increment() {
//     console.log("increment", this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log("decrement", this);
//     this.value -= 1;
//   },
// };

// const counterValue = document.querySelector("#value");
// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');

// decrementBtn.addEventListener("click", function () {
//   counter.decrement();
//   counterValue.textContent = counter.value;
// });

// incrementBtn.addEventListener("click", function () {
//   counter.increment();
//   counterValue.textContent = counter.value;
// });
