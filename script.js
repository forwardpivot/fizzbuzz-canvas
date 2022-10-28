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
    ctx.arc(172, 196, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    //Antenna
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(170, 187);
    ctx.lineTo(158, 175);
    ctx.lineTo(150, 195);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(150, 196, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    //The stripes on the bee
    ctx.lineWidth = 6;
    //The butt stripe
    ctx.beginPath();
    ctx.moveTo(218, 178);
    ctx.lineTo(218, 221);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //The middle stripe
    ctx.beginPath();
    ctx.moveTo(203, 175);
    ctx.lineTo(203, 225)
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //The top stripe
    ctx.beginPath();
    ctx.moveTo(187, 177);
    ctx.lineTo(187, 223);
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