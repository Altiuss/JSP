"use strict";

function first() {
    setTimeout(function() {
        console.log(1);
    }, 1)
}

function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log(`I learn ${lang}`);
    callback();
}

function done() {
    console.log('I completed this lesson');
}

learnJS('JavaScript', function() {
    console.log('I completed this lesson');
})

learnJS('Python', done);