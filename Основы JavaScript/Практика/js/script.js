/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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




const reklam = document.querySelectorAll(".promo__adv img"),
    genre = document.querySelectorAll(".promo__genre"),
    bg = document.querySelector(".promo__bg"),
    list = document.querySelector(".promo__interactive-list"),
    lists = list.querySelectorAll("li"),
    reklamsBlock = document.querySelector(".promo__adv"),
    form = document.querySelector(".add"),
    input = form.querySelector(".adding__input"),
    deleted = list.querySelectorAll(".delete"),
    favoriteCheckbox = document.querySelector('input[type="checkbox"]');



    function sortedMovies(arr) {
        return arr.sort();
    };
    
    function alignedString(str) {
        return str.slice(0, 6) + '...';
    }
    




reklamsBlock.remove();


genre[0].textContent = "драма";

bg.style.background = 'url("./img/content_1.jpg")';





form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(input.value)

    let newArr = input.value.trim();
    if (newArr) {
    newArr = newArr.length > 6 ? newArr.slice(0, 6) + '...' : newArr;
    if (favoriteCheckbox.checked) {
        console.log("Добавляем любимый фильм");
    }
    movieDB.movies.push(newArr);
    sortedMovies(movieDB.movies);
    showElements(movieDB.movies);

    e.target.reset()}
})

list.addEventListener("click", el => {
    
    if (el.target.classList.contains('delete')) {
        const li = el.target.parentElement;
        const index = [...list.children].indexOf(li);

        movieDB.movies.splice(index, 1);
        showElements(movieDB.movies);
    }

}
)



function showElements(arr) {
    list.innerHTML = '';

    arr.forEach((item, i) => {

        const li = document.createElement('li');
        li.classList.add('promo__interactive-item');

        li.textContent = `${i + 1}  ${item}`
        const deleteBtn = document.createElement('div');
        deleteBtn.classList.add('delete');

        li.appendChild(deleteBtn);
        list.appendChild(li);

    });

}


showElements(movieDB.movies);


console.log(movieDB.movies);

