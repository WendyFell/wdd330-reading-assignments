const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

// Triangle
// convert defree values to radians, humans think in degrees, but JavaScript code is in radians
function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

ctx.fillStyle = "rgb(255, 0, 0)"; // Set the color of the triangle
ctx.beginPath(); // start drawing the path
ctx.moveTo(50, 50); // set the pen at 50, 50
ctx.lineTo(150, 50); // drawing a line from the above point to this point
const triHeight = 50 * Math.tan(degToRad(60)); // using trigonometry to set the height of the triangle
ctx.lineTo(100, 50 + triHeight); //x is half of the other two x values. Y is 50(the same as the other y) + the height of the triangle
ctx.lineTo(50, 50); // last line brought to beginning point
ctx.fill();

// Circle
ctx.fillStyle = "rgb(0, 0, 255)";
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 106); 
ctx.fill();