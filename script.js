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
    //His little legs
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(180, 215);
    ctx.lineTo(180, 230);
    ctx.lineTo(185, 235);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(195, 215);
    ctx.lineTo(195, 230);
    ctx.lineTo(200, 235);
    ctx.stroke();
    ctx.moveTo(213, 215);
    ctx.lineTo(213, 230);
    ctx.lineTo(220, 235);
    ctx.stroke();
    //The wings
    ctx.strokeStyle = '#f7f6f2';
    ctx.fillStyle = '#f7f6f2'
    ctx.beginPath();
    ctx.moveTo(210, 140);
    ctx.lineTo(193, 205);
    ctx.lineTo(230, 185);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = 'black'
}

function soda() {
    ctx.lineWidth = 3
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(320, 230);
    ctx.lineTo(315, 420);
    ctx.lineTo(445, 420);
    ctx.lineTo(445, 230);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath()
    ctx.ellipse(350, 230, 5, 100, 1.58, 0, Math.PI * 2);
    ctx.stroke();
}
soda();

//The Fizzbuzz logic
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
        bee();
    } else console.log(i);
}