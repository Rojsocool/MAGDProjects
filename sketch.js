let w,h,x,y;



function setup() {
  createCanvas(400, 400);
  w=10.5;
  h=10.5;
  print("You can move the dark blue bubble and the light blue one");
  print ('So try moving them');
}

function draw() {
  background(220);
  
 push();
  colorMode(RGB);
  fill(0,0,255);
  x=max(mouseX,0,0);
  fill(0,0,255);
  ellipse(x,mouseY,w,h);
  w=(w+2)%(height/4);
  h=(h+2)%(height/4);
  pop();
  
  push();
  colorMode(RGB);
  fill(0,200,255);
  noStroke();
  ellipse(x,y,w,h);
  x=random(width);
  y=random(height);
  w=(w+2)%(height/4);
  h=(h+2)%(height/4);
  frameRate(15);
  pop();
  
  push();
  colorMode(RGB);
  fill(0,255,190);
  noStroke();
  ellipse(x,y,50,50)
  x=width/3
  y=width/3
  x= x+ (20*cos(frameCount))+5;
  y= y+ (20*sin(frameCount))+5;
  pop();
}