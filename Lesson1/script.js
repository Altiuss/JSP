"use strict";

const numberOfFilms = +prompt('How many movies have you already watched?', '');


const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


const a = prompt('One of the last movies you watched?', ''),
    b = +prompt('How highly do you rate it?', ''),
    c = prompt('One of the last movies you watched?', ''),
    d = +prompt('How highly do you rate it?', '');

    personalMoviesDB.movies[a] = b;
    personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);4