// class Pikachu {
//     constructor(image, left, right, size, top) {
//         this.image = image;
//         this.left = left;
//         this.top = top;
//         this.size = size
//         this.right = right
//     }
//
//     getImage() {
//         return '<img width="' + this.size + '"' +
//             ' height="' + this.size + '"' +
//             ' src="' + this.image + '"' +
//             ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
//     }
//
//     moveRight() {
//         this.left += 1
//         console.log('ok: ' + this.left)
//     }
//
//     moveLeft() {
//         this.left = this.left - 1;
//     }
// }
//
// var pikachu = new Pikachu('pikachu.png', 0, 30, 20)
//
// function start() {
//
//     if (pikachu.left < window.innerWidth - pikachu.size) pikachu.moveRight();
//     document.getElementById("game").innerHTML = pikachu.getImage();
//     setTimeout(start, 1000);
//
// }
//
// start();

class Car{
    constructor(speedX, speedY, width, height, x, y) {
        this.speed_X = speedX;
        this.speed_Y = speedY;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    moveToLeft(){
        this.x -= this.speed_X;
        this.display();
    }
    moveToRight() {
        this.x += this.speed_X;
        this.display();
    }
    moveToTop(){
        this.y -= this.speed_Y
        this.display();
    }
    moveToBotton(){
        this.y +=this.speed_Y;
        this.display();
    }
    display(){
        let xe = document.getElementById('xe');
        xe.style.position = 'absolute';
        xe.style.width = this.width+'px';
        xe.style.height = this.height+'px';
        xe.style.top = this.y+'px';
        xe.style.left = this.x+'px';
    }
}
let car = new Car(30,30,20,20,50,50)
car.display();
window.addEventListener('keydown', (e) => {
    if (e.keyCode == 40) {
        car.moveToBotton();
    }
    if (e.keyCode == 37) {
        car.moveToLeft()
    }
    if (e.keyCode == 38) {
        car.moveToTop()
    }
    if (e.keyCode == 39) {
        car.moveToRight()
    }
})

function diChuyen() {
    car.moveToRight();
}
setInterval(diChuyen,1000)



