// Счетчик лайков
// querySelector возвращает первый элемент документа,
// который соответствует указанному селектору или группе селекторов.
// Если совпадений не найдено, возвращает значение null.
// let heart = document.querySelector(".heart");
// let likesNumber = document.querySelector(".likes--number");
// let counter = 0;

// heart.onclick = function () {
//   if (heart.classList.contains("added")) {
//     counter--;} 
//   else {counter++;}
//   likesNumber.textContent = counter;
//   heart.classList.toggle("added");
// };


// Заменив значение counter-- и counter++
// на likesNumber.textContent--/++ счетчик будет учитывать значения других пользователей
let heart = document.querySelector(".heart");
let likesNumber = document.querySelector(".likes--number");


heart.onclick = function () {
  if (heart.classList.contains("added")) {
    likesNumber.textContent--;
  } 
  else {
    likesNumber.textContent++;
  }

  heart.classList.toggle("added");
};