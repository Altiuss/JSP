"use strict";


const numberOfFilms = +prompt("How many movies have you already watched?", '').trim();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {

    const a = prompt("One of the last movies you have watched", '').trim(),
        b = prompt("How do you rate it?", '').trim();

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {

        personalMovieDB.movies[a] = b;
        console.log('done')
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Too few movies have been watched.");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a great viewer.");
} else if(personalMovieDB.count >= 30) {
    console.log("You are a cinephile");
} else {
    console.log("An error occurred")
}


console.log(personalMovieDB);