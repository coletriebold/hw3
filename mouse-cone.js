function setup() {
  colorMode(HSB);
  noFill();
}
i=1;
function draw() {
  background(0,0,100);
	while (i <= height) {
  	line(mouseX,mouseY,i,height);
  	i=i+10;
  }
  i=0
}
