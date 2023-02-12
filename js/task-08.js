// 1.Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2.Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3.Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// 4.Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// 5.Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Будь ласка, заповніть усі поля!");
  } else {
    const userData = { email: email.value, password: password.value };
    console.log(userData);
  }
  event.currentTarget.reset();
}

// Збираємо дані форми за допомогою FormData та forEach

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);
//   formData.forEach((value, name) => {
//     console.log("name", name);
//     console.log("value", value);
//   });
//   console.log(formData);
// }
