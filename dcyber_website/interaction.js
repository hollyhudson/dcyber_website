// Here's a more complex example to play with css with p5.js

let canvas;
let get_back_to_work;
let dir = 3;
let col_g = 0;

const NUM_BUBBLES = 80;
let bubbles = [];

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0); 			// put the canvas at the top
	canvas.style('z-index', '-1'); 	// put it behind the page content
	canvas.id("canvas");

	get_back_to_work = select('.text-super');

	// make the bubbles
	for (let i = 0; i < NUM_BUBBLES; i++) {
		bubbles.push(new Bubble(random(width), random(height)));
	}	

/*
****** Coloring bubbles based on clicks *********
*/

function more_blues() {
	for (let i = 0; i < bubbles.length; i++) {
		if (parseInt(random(10)) == 0) {
			bubbles[i].color = 1;
		}
	}	
}

function more_browns() {
	for (let i = 0; i < bubbles.length; i++) {
		if (parseInt(random(10)) == 0) {
			bubbles[i].color = 3;
		}
	}	
}

function draw() {
	canvas.style('z-index', '-1'); 	// put it behind the page content
	background(130);

	if (col_g >= 240) {
		dir = -3;	
	} else if (col_g <= 0){
		// more magenta
		dir = 3;
	}	
	col_g += dir;	

	// Show the bubbles
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].updatePos();
		bubbles[i].display();
	}
}
