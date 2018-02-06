function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255, 20, 20);
  } else if (key == 'G') {
    fill(20, 255, 20);
  } else if (key == 'B') {
    fill(20, 20, 255); 
  }
	else if (key == 'W') {
    fill(0, 0, 0);
	}
	else if (key == 'P') {
    fill(128,0,128);
	}
	else if (key == 'Q') {
    fill(random(255),random(255),random(255));
	}
	else if (key == '1') {
    diameter = 10;
	}
	else if (key == '2') {
    diameter = 20;
	}
	else if (key == '3') {
    diameter = 30;
	}
}
