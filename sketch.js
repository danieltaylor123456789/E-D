function setup() {
  createCanvas(innerWidth, innerWidth);
  background(250,250,250)
  stroke(0,0,0)
  frameRate(0.5)
  background (0,0,0)
}

function draw() {
translate(30,30);
var width = innerWidth-2*30;
var height = innerWidth-2*30;
var shift = 20;
var space = 3;
var numSquares =10;
  
  var sideLen= width/numSquares;
  for(var y=0; y < height; y = y + sideLen){
    for(var x = 0; x < width; x = x + sideLen){
      fill (random(140,160),random(170,145),random(131,170));
      quad(x+space+ random (-shift, shift),y+space+ random (-shift, shift), x+sideLen-space+ random (-shift, shift),y+space+ random (-shift, shift),x+sideLen-space+ random (-shift, shift),y+sideLen-space+ random (-shift, shift), x+space+ random (-shift, shift), y+sideLen-space+ random (-shift, shift)); 
    }
  }
noLoop();
}