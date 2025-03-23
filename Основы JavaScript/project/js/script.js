/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const sortedMovies = movieDB.movies.sort();

 const reklam = document.querySelectorAll(".promo__adv img"),
       genre = document.querySelectorAll(".promo__genre"),
       bg = document.querySelector(".promo__bg"),
       list = document.querySelector(".promo__interactive-list"),
       lists = list.querySelectorAll("li");


 reklam.forEach(el => el.remove());


 genre[0].textContent = "драма";

bg.style.background = 'url("./img/content_1.jpg")';


sortedMovies.forEach((el, i)  => console.log(`${i +1}  ${el}`));

lists.forEach((item, i) => {
    item.textContent = `${i +1}  ${sortedMovies[i]}`
});







