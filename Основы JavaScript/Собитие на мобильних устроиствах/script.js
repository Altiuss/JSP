//touchstart
//touchmove
//touchend
//touchenter
//tauchleave
//tauchcancel



const btn = document.getElementById("btn");

console.log("hallo!")

btn.addEventListener('touchstart', e => {
    e.preventDefault();
    console.log("start")
    console.log(e.touches)
})

btn.addEventListener('touchmove', e => {
    e.preventDefault();
    console.log("move")
})

btn.addEventListener('touchend', e => {
    e.preventDefault();
    console.log("end")
}
)


//touches
//targetTouches
//changedTouches

console.log(e.targetTouches[0].pageX)