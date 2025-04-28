'use strict';

class Rectangle {
    constructor(height, width) {

        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}


class ColoreRechtangleWithText extends Rectangle {

    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
       console.log(`Text: ${this.text}, color: ${this.bgColor}`); 
    }

}

const div = new ColoreRechtangleWithText(25, 46, 'Hallo Aigars!', 'red');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 9);
// const long = new Rectangle(13, 75);


// console.log(square.calcArea());
// console.log(long.calcArea());