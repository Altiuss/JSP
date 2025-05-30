'use strict';

const inputRub = document.querySelector('#rub'),
    inpurUsd = document.querySelector('#usd');


inputRub.addEventListener('input', () => {

    const request = new XMLHttpRequest();


    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.send();


    request.addEventListener('load', () => {

        if(request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inpurUsd.value = (+inputRub.value / data.current.usd).toFixed();
        } else {
            inpurUsd.value = "Error";
        }
    });

    //status
    //statusText
    //response
    //readyState


})


