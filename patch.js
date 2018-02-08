function ColesPatch(x,y) {
  noFill();
  stroke(238);
  rect(x,y,300,300);
  colorMode(HSB);
  
  strokeWeight(4);
  stroke(0,0,0);
  // body
  line(x+150,y+100,x+150,y+200);
  
  // legs
  line(x+175,y+250,x+150,y+200);
  line(x+120,y+250,x+150,y+200);
  
  // arms
  line(x+200,y+125,x+150,y+150);
  line(x+100,y+125,x+150,y+150);
  
  // tube man
  fill(0,0,100);
  strokeWeight(1);
  var j = 0;
  stroke(0,0,0);
  for (var i = 0; i<5; i++) {
  	ellipse(x+150,y+200-j,50,30);
    j = j+25;
    
  }
  
  // head
  noStroke();
  fill(random(350),100,100);
  ellipse(x+150,y+50,100);
  
  // eyes
  fill(0,0,0);
  ellipse(x+170,y+40,7,12);
  ellipse(x+130,y+40,7,12);
  stroke(0)
  
  // mouth
  line(x+132,y+80,x+168,y+80);
  line(x+132,y+80,x+125,y+67);
  line(x+168,y+80,x+175,y+67);
  
  // leg tubes
  strokeWeight(1);
  stroke(0,0,0);
  fill(0,0,100);
  j = 0;
  for (var k = 0; k<4; k++) {
  	ellipse(x+120+j,y+250-2*j,20,20);
    ellipse(x+175-j,y+250-2*j,20,20);
    j = j+5;
  }
  // arm tubes
  j = 0;
  for (var z = 0; z<3; z++) {
  	ellipse(x+200-2*j,y+125+j,20,20);
    ellipse(x+100+2*j,y+125+j,20,20);
    j = j+5;
  }
  
  // banana
  noStroke();
  fill(60,98,95);
  ellipse(x+220,y+111,50);
  fill(0,0,100);
  ellipse(x+238,y+104,60);
}

background(255)
ColesPatch(0,0);
background(255);
ColesPatch(width-301,height-301);
