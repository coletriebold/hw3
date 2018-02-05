i=0;
noFill();
while (i <= height/2) {
  line(width/2-i,i,width/2+i,i);
  i=i+10;
}
i=0;
while (i <= height/2) {
  line(width/2-i, height-i,width/2+i,height-i);
  i=i+10;
}
