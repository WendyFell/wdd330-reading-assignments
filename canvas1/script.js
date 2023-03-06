// new reference to canvas with the class, set the canvas width and height equal to the viewport.
const canvas = document.querySelector(".myCanvas");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// ctx is the context(to be able to draw on the canvas)
const ctx = canvas.getContext("2d");

// filling the entire canvas
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);

// add some rectangles
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 50, 100, 150); // which is 50 pixels to the right and 50 pixels down and is 100 pixels wide and 150 pixels high

ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(75, 75, 100, 100);

ctx.fillStyle = "rgba(255, 0, 255, 0.75)";
ctx.fillRect(25, 100, 175, 50);

// stroke and line widths
ctx.strokeStyle = "rgb(255, 255, 255)";
ctx.lineWidth = 5; // set the stroke width in pixels, has to occur before declaring the strokeRect
ctx.strokeRect(25, 25, 175, 200);


