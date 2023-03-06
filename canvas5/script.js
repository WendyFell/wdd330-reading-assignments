const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

ctx.translate(width / 2, height / 2); // use translate(), which moves the origin point of the canvas. This case puts it in the center.

function degToRad(degrees) {
    return degrees * Math.PI / 180;
  }
  
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let length = 250;
let moveOffset = 20;

for (let i = 0; i < length; i++) { // On each iteration, we:
  ctx.fillStyle = `rgba(${255 - length},0,${255 - length},0.9)`; // Set the fillStyle to be a shade of slightly transparent purple, which changes each time, based on the value of length.
  ctx.beginPath(); // Begin the path
  ctx.moveTo(moveOffset, moveOffset); // Move the pen to a coordinate of (moveOffset, moveOffset). This variable defines how foar we want to move each time we draw a new rectangle.
  ctx.lineTo(moveOffset + length, moveOffset); // Draw a line to a coordinate of (moveOffset + length, moveOffset); This draws a line of length parllel to the x axis
  const triHeight = length / 2 * Math.tan(degToRad(60)); //calculate the triangle's height
  ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight); //Draw a line to the downward-pointing corner of the triangle, 
  ctx.lineTo(moveOffset, moveOffset); // then draw a line back to the start of the triangle
  ctx.fill(); // Call fill() to fill in the triangle.

  // Update the variables that describe the sequence of triangles, so we can be ready to draw the next one. 
  length--; // length decreased by on each triangle gets smaller
  moveOffset += 0.7; // increase moveOffset by small amount so each successive triangle is slightly further away.
  ctx.rotate(degToRad(5)); // Use function rotate() which allows us to rotate the entire canvas.This rotates by 5 degrees before drawing the next triangle
}

