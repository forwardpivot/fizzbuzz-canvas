let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function bee() {
    //The body of the bee
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.ellipse(200, 200, 35, 25, 25.1, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //He needs to see
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(173, 198, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    //Antenna
    ctx.beginPath();
    ctx.moveTo(170, 187);
    ctx.lineTo(1, 204);
    ctx.closePath();
    ctx.stroke();
    //The stripes on the bee
    ctx.beginPath();
    ctx.arc(185, 214, 41, 5.1, .1);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(165, 222, 43, 5, .01);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
bee();

//The Fizzbuzz logic
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else console.log(i);
}