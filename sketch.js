
var redCol = 0;
var greenCol = 50;
var blueCol=255




function setup(){
  createCanvas(1200,400);
  
}


function draw(){
 
  redCol=map(mouseX,0,1200,0,255);
  greenCol =map(mouseX,50,900,50,100);
  blueCol= map(mouseX,0,1200,255,0);
  background(redCol,greenCol,blueCol);
  fill("black");
  ellipse(mouseX,200,80,80);
  
  drawSprites();
}